import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatManagerEntity } from 'src/entities/chat-manager.entity';
import { ChatParticipantsEntity } from 'src/entities/chat-participants.entity';
import { ChatEntity } from 'src/entities/chat.entity';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { GetChatController } from './get-chat/get-chat.controller';

@Module({
	imports: [
		TypeOrmModule.forFeature([ChatManagerEntity]),
		TypeOrmModule.forFeature([ChatEntity]),
		TypeOrmModule.forFeature([ChatParticipantsEntity])],
	providers: [ChatService],
	controllers: [ChatController, GetChatController],
})
export class ChatModule {}
