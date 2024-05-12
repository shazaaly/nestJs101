import { MinLength } from "class-validator"
import { min } from "rxjs"

export class CreateNinjaDto {
    @MinLength(3)
    name: string

    weapon: 'stars' | 'bullets'
}
