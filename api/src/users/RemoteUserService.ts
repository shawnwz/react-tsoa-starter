import { User, UserCreationParams } from '@react-tsoa-starter/shared-types';
import { UserService, aMockUser } from './types';

export class RemoteUserService implements UserService {
  getUserByEmail(email: string): Promise<User> {
    return Promise.resolve(aMockUser);
  }

  getUserById(userId: string): Promise<User> {
    return Promise.resolve(aMockUser);
  }

  registerUser(user: UserCreationParams): Promise<User> {
    return Promise.resolve(aMockUser);
  }
}
