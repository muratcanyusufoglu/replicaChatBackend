import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SocketController } from './socket/socket.controller';
import { SocketService } from './socket/socket.service';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
