import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()

export class AuthGuard implements CanActivate{
    private readonly authGuardLogger = new Logger(AuthGuard.name)
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        this.authGuardLogger.log(AuthGuard.name)

        const request = context.switchToHttp().getRequest()
        return true

    }




}