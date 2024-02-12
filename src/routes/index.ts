import { Router } from 'express'

import app from './app'
import auth from './auth'
import user from './user'
import enums from './enums'
import servey from './serveys'

const router = Router()

router.use('/app', app)

router.use('/auth', auth)

router.use('/user', user)

router.use('/enums', enums)

router.use('/servey', servey)

export default router
