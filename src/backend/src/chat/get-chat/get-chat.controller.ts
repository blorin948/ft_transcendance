import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ChatService } from '../chat.service';

@Controller('get-chat')
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
}
