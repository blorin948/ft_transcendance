import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ChatService } from '../chat.service';

@Controller('getChat')
export class GetChatController {

	constructor(private ChatService: ChatService) {}

	@Get('findChatOfUser/:id')
	async findChatOfUser(@Param('id') id: number) {
		return await this.ChatService.findChatOfUser(id);
	/*	if (!chat) {
			throw new NotFoundException();
		  }
		  return chat;*/
	}

	@Get('findChat/:id')
	async findChat(@Param('id') id: number) {
		return await this.ChatService.findChat(id);
	}

	@Get('findUsersOfChat/:id')
	async findUsersOfChat(@Param('id') id: number) {
		return await this.ChatService.findUsersOfChat(id);
	}
}
