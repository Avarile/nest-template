import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class ResponseExceptionReformer implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    // console.log(ctx);
    
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      tag: '123',
      code: status,
      data: null,
      error: exception.getResponse()?.['message'] || exception.getResponse(),
      // error: exception.getResponse()
    });
  }
}