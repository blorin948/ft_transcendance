import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { info } from 'console';
import { User } from 'src/auth/user.decorator';
import { ChatParticipantsEntity } from 'src/entities/chat-participants.entity';
import { ChatEntity } from 'src/entities/chat.entity';
import { UserEntity } from 'src/entities/user.entity';
import { ChatDTO, UserToChatDTO } from 'src/models/chat.model';
import { getRepository, Repository } from 'typeorm';

@Injectable()
export class ChatService {
	constructor(
		@InjectRepository(ChatEntity) private ChatRepo: Repository<ChatEntity>,
		@InjectRepository(ChatParticipantsEntity) private ChatParticipantsRepo: Repository<ChatParticipantsEntity>,
		) {}

	async createChat(ChatInfo: ChatDTO)
	{
		const chatManager = this.ChatRepo.create(ChatInfo);
		const id = await this.createChat(chatManager);
		chatManager.chat = await this.ChatRepo.findOne(id);
		await chatManager.save();
		return {chatManager: {...chatManager}};
	}
	
	async createChat(ChatManager: ChatEntity) {
		const chat = this.ChatRepo.create();
		await chat.save();
		return chat.id;
	}

	async addUserToChat(NewUser: UserToChatDTO)
	{
		const participants = this.ChatParticipantsRepo.create(NewUser);
		await participants.save();
		return participants;
	}

	async findChatOfUser(id: number) : Promise<ChatParticipantsEntity[]> {
		const chats = await getRepository(ChatParticipantsEntity)
		.createQueryBuilder('chat')
		.where("chat.userId = :id", {id : id})
		.getMany();
		return chats;
	}

	async findChat(id:number) : Promise<ChatEntity> {
		const chat = await this.ChatRepo.findOne(id);
		return chat;
	}

	async findUsersOfChat(id: number) : Promise<ChatParticipantsEntity[]> {
		const users = await getRepository(ChatParticipantsEntity)
		.createQueryBuilder('chat')
		.where("chat.chatId = :id", {id : id})
		.getMany()
		return users;
	}
}
