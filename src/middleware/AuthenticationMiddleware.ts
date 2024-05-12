import { Injectable, Logger, NestMiddleware, Scope } from "@nestjs/common";
import { NextFunction } from "express";
import { RequestService } from "src/request.service";

@Injectable({scope: Scope.REQUEST})

export class AuthenticationMiddleware implements NestMiddleware{
    private readonly logger = new Logger(AuthenticationMiddleware.name)

    constructor(private readonly requestService : RequestService){}

    use(req: Request, res: Response, next:NextFunction){
        this.logger.log(AuthenticationMiddleware.name)

        const userId = '123'
        this.requestService.setUserId(userId)
        next()
    }

}