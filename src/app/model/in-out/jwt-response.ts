export class JwtResponse {
  id?: number;
  token?: string;
  name?: string;
  userName?: string;
  roles?: any[];
  statusUs?: number;

  constructor(id: number , token: string, name: string, userName: string, roles: any, statusUs: number) {



    this.id = id;
    this.token = token;
    this.name = name;
    this.userName = userName;
    this.roles = roles;
    this.statusUs = statusUs;
  }
}
