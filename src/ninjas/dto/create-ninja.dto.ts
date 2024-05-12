import { IsEnum, MinLength, isEnum } from "class-validator"

export class CreateNinjaDto {
    @MinLength(3)
    name: string

    @IsEnum(['stars', 'bullets'], {message :'Weapon must be either stars or bullets!'})
    weapon: 'stars' | 'bullets'
}
