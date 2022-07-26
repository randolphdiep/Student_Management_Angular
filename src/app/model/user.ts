export class User {
    userId?:number;
	userName?:string;
	password?:string;
}

export class UserInfo {
    constructor(
      public username: string,
      // public id_token: string,
      public password: string,
      // private expires_in: Date
    ) {}
  
    // get token() {
    //   if (!this.expires_in || new Date() > this.expires_in) {
    //     return null;
    //   }
    //   return this.id_token;
    // }
  
    // get token() {
    //   return this.access_token
    // }
  }