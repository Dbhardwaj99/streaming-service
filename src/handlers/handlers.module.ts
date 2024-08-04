import { Module } from '@nestjs/common';
import { ChatHandler } from './chat.handler';
import { RoomHandler } from './room.handler';
import { StreamHandler } from './stream.handler';
// import { ChatModule } from '../chat/chat.module';
// import { WebRTCModule } from '../webrtc/webrtc.module';

@Module({
//   imports: [ChatModule, WebRTCModule],
  providers: [ChatHandler, RoomHandler, StreamHandler],
})
export class HandlersModule {}