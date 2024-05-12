import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NinjasModule } from './ninjas/ninjas.module';
import { RequestService } from './request.service';
import { AuthenticationMiddleware } from './middleware/AuthenticationMiddleware';

@Module({
  imports: [UsersModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService, RequestService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware)
    .forRoutes('*')
    
  }
}
