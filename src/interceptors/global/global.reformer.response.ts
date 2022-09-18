import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ResponseReformer implements NestInterceptor {
  /**
   *
   */

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      map((data: any) => {
        // console.log(data,"123123123");

        if (data instanceof HttpException) {
          return {
            code: data?.['code'] || data?.['statusCode'] || 500,
            data: null,
            error: data.message,
          };
        } else {
          return {
            code: 200,
            data: data,
            error: null,
          };
        }
      }),
    );
  }
}