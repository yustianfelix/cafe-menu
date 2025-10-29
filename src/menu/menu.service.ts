import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Import the corrected Document type
import { MenuItem, MenuItemDocument } from './schemas/menu-item.schema';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(MenuItem.name) private menuItemModel: Model<MenuItem>,
  ) {}

  async create(createMenuItemDto: CreateMenuItemDto): Promise<MenuItemDocument> {
    const createdItem = new this.menuItemModel(createMenuItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<MenuItemDocument[]> {
    return this.menuItemModel.find().exec();
  }

  async findOne(id: string): Promise<MenuItemDocument | null> {
    return this.menuItemModel.findById(id).exec();
  }

  async update(id: string, updateData: Partial<CreateMenuItemDto>): Promise<MenuItemDocument | null> {
    return this.menuItemModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.menuItemModel.deleteOne({ _id: id }).exec();
  }
}