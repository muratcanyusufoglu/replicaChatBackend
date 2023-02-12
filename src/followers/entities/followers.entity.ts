import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Follow extends Document {
  @Prop()
  follower: string;

  @Prop()
  following: string;

  @Prop()
  followerId: string;

  @Prop()
  followingId: string;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);
