import { User } from '@react-tsoa-starter/shared-types';
import { aMockUser, UserService } from './types';

export default class MockUserService implements UserService {
  getUserByEmail(email: string): Promise<User> {
    return Promise.resolve(aMockUser);
  }

  getUserById(userId: string): Promise<User> {
    return Promise.resolve(aMockUser);
  }

  registerUser(user: User): Promise<User> {
    return Promise.resolve(aMockUser);
  }
}
