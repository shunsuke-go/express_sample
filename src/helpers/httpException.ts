import { Request, Response } from 'express'

type ErrorData = {
  [key: string]: any
}
class HttpException extends Error {
  statusCode?: number
  message: string
  data: ErrorData
  constructor(statusCode: number, message: string, data: ErrorData) {
    super(message)
    this.statusCode = statusCode || 500
    this.message = message
    this.data = data
  }
}

export const badRequestException = (message = '400 Bad Request', data?: ErrorData): HttpException => {
  return new HttpException(400, message, data)
}

export const unauthorizedException = (message = '401 Unauthorized', data?: ErrorData): HttpException => {
  return new HttpException(401, message, data)
}

export const forbiddenException = (message = '403 Forbidden', data?: ErrorData): HttpException => {
  return new HttpException(403, message, data)
}

export const notFoundException = (message = '404 Not Found', data?: ErrorData): HttpException => {
  return new HttpException(404, message, data)
}

export const errorHandler = (
  err: HttpException,
  req: Request,
  res: Response
): void => {
  console.log(req)
  res.status(err.statusCode || 500).send({
    message: err.message,
    error: {
      ...err.data
    }
  })
}
