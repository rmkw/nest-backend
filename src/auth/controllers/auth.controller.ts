import { loginResponse } from '../interfaces/login-response';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { LoginDto, RegisterUserDto } from '../dto';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.authService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  register(@Body() registerDto: RegisterUserDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(
    @Query('page') page: number = 1, // Página por defecto 1
    @Query('limit') limit: number = 10, // Límite por defecto 10
  ) {
    return this.authService.findAll(page, limit);
  }
  // findAll( @Request() req: Request ) {
  //   // const user = req['user']
  //   // return user;
  //   return this.authService.findAll();
  // }

  @UseGuards(AuthGuard)
  @Get('check-token')
  checkToken(@Request() req: Request): loginResponse {
    const user = req['user'] as User;

    return {
      user,
      token: this.authService.getJWT({ id: user._id }),
    };
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
