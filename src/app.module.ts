import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandlersModule } from './handlers/handlers.module';

@Module({
  imports: [HandlersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}