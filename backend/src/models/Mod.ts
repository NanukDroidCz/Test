import mongoose, { Schema, Document } from 'mongoose';

export interface IMod extends Document {
  name: string;
  description: string;
  author: string;
  version: string;
  items: mongoose.Types.ObjectId[];
  config: any;
  isPublished: boolean;
  createdAt: Date;
}

const modSchema = new Schema<IMod>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  version: { type: String, default: '1.0.0' },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  config: Schema.Types.Mixed,
  isPublished: { type: Boolean, default: false }
}, { timestamps: true });

export const Mod = mongoose.model<IMod>('Mod', modSchema);
