import { MiddlewareConsumer, Module, NestModule, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NinjasModule } from './ninjas/ninjas.module';
import { RequestService } from './request.service';
import { AuthenticationMiddleware } from './middleware/AuthenticationMiddleware';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { FreezePipe } from './pipes/freeze.pipe';
import { HtpExceptionFilter } from './filters/httpExceptionFilter';

@Module({
  imports: [UsersModule, NinjasModule],
controllers: [AppController],
  providers: [AppService, RequestService,
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor
    },
    {
      provide: APP_PIPE,
      useClass: FreezePipe
    },
    {
      provide: APP_FILTER,
      useClass: HtpExceptionFilter
    }
  ],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware)
    .forRoutes('*')
    
  }
}
