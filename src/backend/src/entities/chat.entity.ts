import { User } from "src/auth/user.decorator";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "./abstract-entity";
import { UserEntity } from "./user.entity";

@Entity()
export class ChatEntity extends AbstractEntity
{
	@Column({nullable: true})
	chatId: number;

	@JoinColumn()
	@OneToOne(() => ChatEntity)
	chat: ChatEntity;

	@Column()
	name: string;

	@Column({nullable: true})
	password: string;

	@Column()
	public: boolean;

	@Column({nullable : true})
	ownerId: number;

	@ManyToMany(()=> UserEntity)
	@JoinTable()
	user: UserEntity[];
}