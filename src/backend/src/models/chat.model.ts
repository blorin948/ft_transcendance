import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { ChatEntity } from "src/entities/chat.entity";
import { UserEntity } from "src/entities/user.entity";

export class ChatDTO {

	@IsString()
	name: string;

	@IsString()
	@IsOptional()
	password: string;

	@IsBoolean()
	public: boolean;

	@IsNotEmpty()
	@IsObject()
	owner: UserEntity;
}

export class UserToChatDTO {

	@IsNotEmpty()
	@IsObject()
	chat: ChatEntity;

	@IsNotEmpty()
	@IsObject()
	user: UserEntity;
}