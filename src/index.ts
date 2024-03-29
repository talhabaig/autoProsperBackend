/**
 *        @file index.ts
 *     @summary Starting point of the application
 * @description Handles the following middlwares:
 *              - CORS and Logger
 *              - Swagger
 *              - API routes
 *              - Auto Update Schema
 *              - Server
 */
import express from 'express'
import yaml from 'js-yaml'
import fs from 'fs'
import swaggerUi from 'swagger-ui-express'

import routes from './routes'
import CORS from './providers/cors'
import * as config from '../config'
import PGPool from './db_pool/pg_pool'
import DBSchema from './db_pool/schema'
import { notFoundHandler } from './helpers'
import * as ver from './providers/version'
import { logger, initRequest, logResponse } from './providers/logger'
import SwaggerInit from './swagger/init' // Update impact_api.yaml
import path from 'path'
import * as dotenv from 'dotenv';

const app = express()
const http = require('http')

async function main() {
  /**
   * HTTP and console logging middleware using winston package
   */

  app.use(initRequest)
  app.use(logResponse)

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json({ limit: '1.5MB' }))
  app.use(CORS.handle)

  // Set versions info
  app.set('apiVersion', ver.apiVersion.version)
  app.set('apiCommit', ver.apiVersion.commitshort)
  app.set('apiVerMajor', ver.apiVersion.apiVerMajor)
  app.set('apiVerMinor', ver.apiVersion.apiVerMinor)
  app.set('apiVerPatch', ver.apiVersion.apiVerPatch)
  app.set('apiVerBuild', ver.apiVersion.apiVerBuild)

  // set token experiation and secret
  app.set('tokenSecret', config.server.apiUuid) // secret variable used for Jwt encoding
  app.set('tokenExpire', config.server.tokenExpiration)

  dotenv.config();
 
  config.dbObj.database = process.env.DB_NAME?.trim() ?? config.dbObj.database; 
  config.dbObj.user = process.env.DB_USER?.trim() ?? config.dbObj.user
  config.dbObj.password = process.env.DB_PASSWORD?.trim() ?? config.dbObj.password
  config.dbObj.host = process.env.DB_HOST?.trim() ?? config.dbObj.host

  const pool = new PGPool(config.dbObj)
  app.set('dbPool', pool)
  await DBSchema.handle(main, pool, config.dbObj)

  // set swagger
  try {
    await SwaggerInit()
	const apiFile = path.join(__dirname, 'swagger', 'backend_api.yaml')
    const oas3Specification: any = yaml.load(fs.readFileSync(apiFile, 'utf8'))
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(oas3Specification))
  } catch (error) {
    logger.error(`main(): Swagger error: ${error}`)
  }

  // set versions
  app.use('/v0', routes)
  app.use('*', notFoundHandler)

  // create server
  const server = http.createServer(app)
  const port = config.server.port || 5002
  server.listen(port, '0.0.0.0', (_error: any) => {
    if (_error) {
      return console.error('Error: ', _error)
    }
    logger.info(`Website API Server is running`)
    logger.info(
      `Connected with Database: ${config.dbObj.database} and host: ${config.dbObj.host} as user: ${config.dbObj.user}`,
    )
    console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`)
    return console.log('\x1b[33m%s\x1b[0m', `Swagger :: Running @ 'http://localhost:${port}/swagger'`)
  })
}
main()