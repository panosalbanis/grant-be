import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type LocationDocument = HydratedDocument<Location>;

@Schema()
export class Location {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  town: string;

  @Prop()
  state: string;

  @Prop()
  country: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
