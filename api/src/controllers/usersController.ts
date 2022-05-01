import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa';
import { User, UserCreationParams } from '@react-tsoa-starter/shared-types';
import { RemoteUserService } from '../users/RemoteUserService';

@Route('users')
export class UsersController extends Controller {
  @Get('{userId}')
  public async getUser(
    @Path() userId: string,
      @Query() name?: string,
  ): Promise<User> {
    return new RemoteUserService().getUserById(userId);
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new RemoteUserService().registerUser(requestBody);
  }
}
