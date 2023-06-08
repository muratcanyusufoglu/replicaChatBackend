import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MessageModule } from './messages/message.module';
import { DalleModule } from './dall_e/dalle.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FollowModule } from './followers/followers.module';
import { UserModule } from './user/user.module';
import { LastMessageModule } from './lastMessages/message.module';
const key = process.env.MONGODB_API_KEY;

@Module({
  imports: [
    MessageModule,
    DalleModule,
    FollowModule,
    UserModule,
    LastMessageModule,
    MongooseModule.forRoot(key),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
