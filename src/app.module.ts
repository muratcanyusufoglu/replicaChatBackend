import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MessageModule } from './messages/message.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MessageModule,
    MongooseModule.forRoot('mongodb+srv://mcy:XT2RSV60CIAdBngb@cluster0.il86p.mongodb.net/nestjs?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
