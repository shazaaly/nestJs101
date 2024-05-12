import { Body, Controller, Get, InternalServerErrorException, Post, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { FreezePipe } from './pipes/freeze.pipe';
import { HtpExceptionFilter } from './filters/httpExceptionFilter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(HtpExceptionFilter)
  @UseInterceptors(LoggingInterceptor)

  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  pipeExample(@Body(new FreezePipe()) body : any ){
    body.test ='123'

  }

  @Get('error')
  getError(){
    throw new InternalServerErrorException
  }
}
