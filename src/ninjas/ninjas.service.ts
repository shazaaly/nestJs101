import { Injectable, Param } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {

  private ninjas = [
    {"id" : 1, "name" : "ninja1", "weapon" : "stars"},
    {"id" : 2, "name" : "ninja2", "weapon" : "bullets"},
    {"id" : 3, "name" : "ninja3", "weapon" : "stars"},
    
  ]

  getNinjas(weapon?:  'stars' | 'bullets'){
    if(weapon){
      return this.ninjas.filter((ninja)=> ninja.weapon === weapon)
    }
    return this.ninjas
    

  }

  getNinja(id: Number){
    const ninja = this.ninjas.find((ninja)=> ninja.id === id)
    if (!ninja) {
      
      throw new Error('Ninja Not Found!')
    }
    return ninja

  }
}
