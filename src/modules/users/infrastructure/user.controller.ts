import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from '../application/user.service';
// ADAPTADOR PRIMARIO - CONTROLLER
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.getUserById(+id);
  }

  @Post()
  async create(@Body() body: { name: string; email: string }) {
    return this.userService.createUser(body.name, body.email);
  }
}
