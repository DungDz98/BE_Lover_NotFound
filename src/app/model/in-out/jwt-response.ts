export class JwtResponse {
  id?: number;
  token?: string;
  name?: string;
  userName?: string;
  roles?: any[];

  constructor(id: number , token: string, name: string, userName: string, roles: any) {



    this.id = id;
    this.token = token;
    this.name = name;
    this.userName = userName;
    this.roles = roles;
  }
}
