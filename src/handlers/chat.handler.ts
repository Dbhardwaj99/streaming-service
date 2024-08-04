import { Injectable } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
// import { ChatHub } from '../chat/hub';

@WebSocketGateway()
@Injectable()
export class ChatHandler {
//   constructor(private chatHub: ChatHub) {}

  @SubscribeMessage('chat')
  handleChat(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    // Implement chat logic
  }
}