import { Column, Entity } from "typeorm";
import { AbstractEntity } from "./abstract-entity";
import { UserEntity } from "./user.entity";

@Entity()
export class ChatEntity extends AbstractEntity
{

}