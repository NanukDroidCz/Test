import mongoose, { Schema, Document } from 'mongoose';

export interface IItem extends Document {
  name: string;
  type: 'weapon' | 'food' | 'clothing' | 'vehicle' | 'tool';
  damage?: number;
  weight: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  modelPath: string;
  inventorySlots: number;
  createdAt: Date;
}

const itemSchema = new Schema<IItem>({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['weapon', 'food', 'clothing', 'vehicle', 'tool'] },
  damage: Number,
  weight: { type: Number, required: true },
  rarity: { type: String, required: true, enum: ['common', 'uncommon', 'rare', 'legendary'] },
  modelPath: { type: String, required: true },
  inventorySlots: { type: Number, required: true }
}, { timestamps: true });

export const Item = mongoose.model<IItem>('Item', itemSchema);
