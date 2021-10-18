import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatParticipantsEntity } from 'src/entities/chat-participants.entity';
import { ChatEntity } from 'src/entities/chat.entity';
import { MessageEntity } from 'src/entities/message.entity';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { GetChatController } from './get-chat/get-chat.controller';
import { MessageController } from './message/message.controller';
import { MessageService } from './message/message.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([ChatEntity]),
		TypeOrmModule.forFeature([MessageEntity]),
		TypeOrmModule.forFeature([ChatParticipantsEntity])],
	providers: [ChatService, MessageService],
	controllers: [ChatController, GetChatController, MessageController],
})
export class ChatModule {}
