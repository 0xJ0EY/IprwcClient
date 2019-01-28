import {User} from './user.model';

export class Auth {
  public user: User;
  public token: string;

  static generateToken(username: string, password: string) {
    return btoa(username + ':' + password);
  }
}
