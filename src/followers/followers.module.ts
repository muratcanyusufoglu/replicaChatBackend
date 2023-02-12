import { CacheModule, Module } from '@nestjs/common';
import { FollowController } from './followers.controller';
import { FollowService } from './followers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Follow, FollowSchema } from './entities/followers.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Follow.name,
        schema: FollowSchema,
      },
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [FollowController],
  providers: [FollowService],
})
export class FollowModule {}
