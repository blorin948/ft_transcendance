import { IsNotEmpty, isNumber, IsNumber, IsObject } from "class-validator";
import { UserEntity } from "src/entities/user.entity";

export class matchDTO
{
	@IsNotEmpty()
	@IsObject()
	user1: UserEntity;

	@IsNotEmpty()
	@IsObject()
	user2: UserEntity;

}

export class matchUpdateDTO
{
	@IsNumber()
	id: number;

	@IsNumber()
	winnerId: number;
}

export class AllMatchFromUsersDTO
{
	@IsNumber()
	id_user: number;
}