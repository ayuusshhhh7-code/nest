import { Injectable , OnModuleInit} from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit{
    constructor(){
        super({});
    }
    async onModuleInit(){
        await this.$connect();
}
}
