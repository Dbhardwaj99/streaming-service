import { Injectable } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
// import { Stream } from '../webrtc/stream';

@WebSocketGateway()
@Injectable()
export class StreamHandler {
//   constructor(private stream: Stream) {}

  @SubscribeMessage('startStream')
  handleStartStream(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    // Implement stream start logic
  }

  // Add more stream-related message handlers
}