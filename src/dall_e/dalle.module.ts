import { CacheModule, Module } from '@nestjs/common';
import { DalleController } from './dalle.controller';
import { DalleService } from './dalle.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dalle, DalleSchema } from './entities/dalle.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Dalle.name,
        schema: DalleSchema,
      },
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [DalleController],
  providers: [DalleService],
})
export class DalleModule {}
