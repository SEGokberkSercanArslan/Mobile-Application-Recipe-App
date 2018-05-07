import {UserService} from "../Services/user.service";

export class UserObject{

  private username:string;
  private password:string;
  private eMail:string;

  constructor(username:any,password:any,eMail:any){
    this.username=username;
    this.password=password;
    this.eMail=eMail;
  }

  getUser(){return this;}
  getUsername(){return this.username;}
  getPassword(){return this.password;}
  getEmail(){return this.eMail;}

}
