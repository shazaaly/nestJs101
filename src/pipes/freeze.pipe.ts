import { ArgumentMetadata, Injectable, Logger, PipeTransform } from "@nestjs/common";

@Injectable()

export class FreezePipe implements PipeTransform{
    private readonly logger = new Logger(FreezePipe.name);

    transform(value: any) {
        // Make Obj immutable
        Object.freeze(value)
        this.logger.debug(`freeze ...`)
        return value
        
    }

}