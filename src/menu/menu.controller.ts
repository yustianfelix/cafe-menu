import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';

@Controller('menu') // Base route: /menu
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(@Body() createMenuItemDto: CreateMenuItemDto) {
    return this.menuService.create(createMenuItemDto);
  }

  @Get()
  async findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.menuService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: Partial<CreateMenuItemDto>) {
    return this.menuService.update(id, updateData);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    return this.menuService.delete(id);
  }
}