import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';

// This is a decorator function can implement the interceptor easier
export function UserResponseInterceptorDecorator(dto: any) {
  return UseInterceptors(new UserResponseInterceptor(dto));
}

export class UserResponseInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled by the request handler
    console.log('I run before the handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        const response = data; // response is outgoing data
        console.log('I run after the handler', response);

        // run something before the response is sent out
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true, //if we want to exclude extraneous values, but I dont think so right now
        });
      }),
    );
  }
}
