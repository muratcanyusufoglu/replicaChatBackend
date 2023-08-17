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
  packageName:string;

  @Prop()
  finishDate:string;

  @Prop()
  messageCoin: number;

  @Prop()
  freeCoin: number;

  @Prop()
  lastLogin: string;
  
  @Prop()
  notificationToken:string;

}

export const UserSchema = SchemaFactory.createForClass(User);
