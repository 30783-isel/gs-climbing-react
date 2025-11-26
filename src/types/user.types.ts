export interface User {
  idUser: string;
  name: string;
  username: string;
  email: string;
  active: string;
  roles: 'ADMIN' | 'TECH';
}