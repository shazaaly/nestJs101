import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas => []
  @Get()
  getAllNinjas() {
    return [];
  }

  //GET a /ninjas/:id

  @Get(':id')
  getNinja() {
    return {};
  }
}
