import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UsersInput {
  @Field()
  username: string;
}
