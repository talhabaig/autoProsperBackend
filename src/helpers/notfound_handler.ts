import { Request, Response } from 'express'

export const notFoundHandler = (_req: Request, res: Response) => {
  // @ts-ignore
  res.status(404)
  // @ts-ignore
  return res.json({ success: false, data: { message: 'Invalid API call' } })
}
