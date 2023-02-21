import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User extends Document {
  @Prop()
   user: string;

  @Prop()
  userId: string;

  @Prop()
  userPhoto: string;

  @Prop()
  gptToken: number;

  @Prop()
  dalleToken: number;

  @Prop()
  freeToken: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
