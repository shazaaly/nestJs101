import { Injectable } from "@nestjs/common";

@Injectable()

export class RequestService{
    private userId: string

    setUserId(id: string){
        this.userId = id
    }

    getUserId(){
        return this.userId
    }


}