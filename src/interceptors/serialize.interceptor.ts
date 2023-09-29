import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    console.log('Im running before handler ', context);

    return handler.handle().pipe(
      map((data: any) => {
        console.log('Running before res', data);
      }),
    );
  }
}
