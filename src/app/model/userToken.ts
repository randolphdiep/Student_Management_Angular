export class UserToken {
    constructor(
      public access_token: string,
      // public id_token: string,
      public refresh_token: string,
      // private expires_in: Date
    ) {}
  
    // get token() {
    //   if (!this.expires_in || new Date() > this.expires_in) {
    //     return null;
    //   }
    //   return this.id_token;
    // }
  
    get token() {
      return this.access_token
    }
  }