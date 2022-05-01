import { User, UserCreationParams } from '@react-tsoa-starter/shared-types';

export interface UserService {
  registerUser(user: UserCreationParams): Promise<User>;
  getUserById(userId: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
}

export const aMockUser: User = {
  id: '1',
  email: 'john@example.com',
  name: 'John',
  status: 'Happy',
  language: 'en',
  phoneNumbers: ['88888'],
  avatar: 'https://img.mockimage.com/i/200x200/jpg/blue/yellow?text=MockImage&size=20',
};
