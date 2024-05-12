import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Post,
  Put,
  NotFoundException,
  ValidationPipe,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService){}

  // GET /ninjas?type=fast => []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'bullets') {
    return this.ninjasService.getNinjas(weapon)
  }

  //POST /ninjas/
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto)
  }

  //GET a /ninjas/:id

  @Get(':id')
  getNinja(id: Number) {
    return this.ninjasService.getNinja(+id);
  }

  @Put(':id')
  updateNinja(@Param('id') id: Number,  @Body() updateNinjaDto: UpdateNinjaDto){
    return this.ninjasService.updateNinja(Number(id), updateNinjaDto)
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string){

    try {
      
      return this.ninjasService.deleteNinja(Number(id))

    } catch (error) {
      throw new NotFoundException
      
    }
  }
}
