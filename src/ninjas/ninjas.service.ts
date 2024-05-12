import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'ninja1', weapon: 'stars' },
    { id: 2, name: 'ninja2', weapon: 'bullets' },
    { id: 3, name: 'ninja3', weapon: 'stars' },
    { id: 4, name: 'ninja4', weapon: 'stars' },
    { id: 5, name: 'ninja5', weapon: 'bullets' },
    { id: 6, name: 'ninja6', weapon: 'stars' },
  ];

  getNinjas(weapon?: 'stars' | 'bullets') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(@Param('id', ParseIntPipe) id: Number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja Not Found!');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: Number, updateNinjaDto: UpdateNinjaDto) {
    const index = this.ninjas.findIndex((ninja) => ninja.id === id);
    if (index === -1) {
      throw new Error('Ninja not found');
    }

    const updatedNinja = {
      ...this.ninjas[index],
      ...updateNinjaDto,
    };

    this.ninjas[index] = updatedNinja;

    return updatedNinja;
  }

  deleteNinja(id: Number){
    const ninjaIndex = this.ninjas.findIndex((ninja)=> ninja.id === id)
    if (ninjaIndex === -1) {
      throw new Error('Ninja not found!')
      
    }
    this.ninjas.splice(ninjaIndex, 1)
    return `Ninja ${id} has been deleted!`


  }
}
