import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Post,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas?type=fast => []
  @Get()
  getAllNinjas(@Query('type') type: String) {
    return [{ type }];
  }

  //POST /ninjas/
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  //GET a /ninjas/:id

  @Get(':id')
  getNinja() {
    return {};
  }
}
