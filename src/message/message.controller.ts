import { Controller } from '@nestjs/common';
import { MessageService } from './message.service';
import { IoService } from 'src/socket/io/io.service';
import { io, Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:3000');

@Controller()
export class MessageController {
  constructor(
    private readonly messageService: MessageService, //private readonly ioService: IoService,
  ) {
    socket.on('message', (type, data) => {
      if (type === 'statusReceived') {
        console.log('statusReceived received !');
        this.messageService.handleMessageStatusReceived(data);
      }

      if (type === 'messageReceived') {
        console.log('messageReceived received !');
        this.messageService.handleMessageReceived(data);
      }

      if (type === 'messageSent') {
        console.log('messageSent received !');
        this.messageService.handleMessageSent(data);
      }

      if (type === 'errorReceived') {
        console.log(data);
      }
    });
  }

  /* handleMessage(data: any) {
    // sent message
    if (data.dataParsed) {
      this.messageService.handleMessageSent(data);
    }

    // message received
    if (data.from) {
      this.messageService.handleMessageReceived(data);
    }

    // status message
    if (data.status) {
      this.messageService.handleMessageStatusReceived(data);
    }
  } */
}
