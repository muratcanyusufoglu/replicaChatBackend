import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MessageModule } from './messages/message.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { LastMessageModule } from './lastMessages/message.module';
const key = process.env.MONGODB_API_KEY;

@Module({
  imports: [
    MessageModule,
    UserModule,
    LastMessageModule,
    MongooseModule.forRoot(key),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
