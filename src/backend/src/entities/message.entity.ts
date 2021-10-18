import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "./abstract-entity";
import { ChatEntity } from "./chat.entity";
import { UserEntity } from "./user.entity";

@Entity()
export class MessageEntity extends AbstractEntity
{
	@Column({nullable: true})
	authorId: number;

	@ManyToOne(() => UserEntity)
	author: UserEntity;

	@Column({nullable: true})
	chatId: number;

	@ManyToOne(() => ChatEntity)
	chat: ChatEntity;
}