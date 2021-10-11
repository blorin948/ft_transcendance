import { Body, Controller, Param, Post, ValidationPipe } from '@nestjs/common';
import { ChatDTO, UserToChatDTO } from 'src/models/chat.model';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
	constructor(private ChatService: ChatService) {}

	@Post('createChat')
	createChatManager(@Body(ValidationPipe) ChatInfo: ChatDTO) {
		return this.ChatService.createChatManager(ChatInfo);
	}
	
	@Post('AddUserToChat')
	AddUserToChat(@Body(ValidationPipe) NewUser: UserToChatDTO) {
		return this.ChatService.addUserToChat(NewUser);
	}

}
