import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { Message } from './message';
import { IoService } from 'src/socket/io/io.service';
import { SocketModule } from 'src/socket/io/socket.module';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { MessageSchema } from './schemas/message.schema';

@Module({
  imports: [
    SocketModule,
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [MessageController],
  providers: [MessageService, Message, IoService],
})
export class MessageModule {}
