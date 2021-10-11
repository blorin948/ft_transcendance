import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, Unique } from "typeorm";
import { AbstractEntity } from "./abstract-entity";
import { ChatEntity } from "./chat.entity";
import { UserEntity } from "./user.entity";

@Entity()
export class ChatParticipantsEntity extends AbstractEntity {

	@Column({nullable :true})
	chatId: number;

	@ManyToOne(() => ChatEntity)
	chat: ChatEntity;

	@Column({nullable : true})
	userId: number;
	
	@ManyToOne(() => UserEntity)
	user: UserEntity;
}