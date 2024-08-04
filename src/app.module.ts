// src/app.module.ts
import { Module } from '@nestjs/common';
// import { ChatModule } from './chat/chat.module';
// import { WebRTCModule } from './webrtc/webrtc.module';
import { HandlersModule } from './handlers/handlers.module';
// import { TurnModule } from './turn/turn.module';

@Module({
  // imports: [ChatModule, WebRTCModule, HandlersModule, TurnModule],
  imports: [HandlersModule],
})
export class AppModule {}