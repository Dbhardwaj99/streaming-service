import { Injectable } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
// import { Room } from '../webrtc/room';
// TODO: complete this file

@WebSocketGateway()
@Injectable()
export class RoomHandler {
//   constructor(private room: Room) {}

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    // Implement room join logic
  }

  // Add more room-related message handlers
}