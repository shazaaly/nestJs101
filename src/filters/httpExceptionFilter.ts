import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { response } from 'express';

@Catch(HttpException)
export class HtpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const resp = ctx.getResponse();
    const req = ctx.getRequest();
    const status = exception.getStatus();

    resp.status(status).json({
      statusCode: status,
      time: Date.now(),
      path : req.url
    });
  }
}
