import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MessageModule } from './messages/message.module';
import { DalleModule } from './dall_e/dalle.module';
import { MongooseModule } from '@nestjs/mongoose';

const key = process.env.MONGODB_API_KEY;

@Module({
  imports: [
    MessageModule,
    DalleModule,
    MongooseModule.forRoot(key)
  ],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {}
