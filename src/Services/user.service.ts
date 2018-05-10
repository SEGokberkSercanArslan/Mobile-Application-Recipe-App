import {UserObject} from "../objects/userObject";
import {Storage} from "@ionic/storage";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService{

  public userCollection:UserObject[] = [];

  constructor(private storage: Storage){}

  addUserToCollection(user:UserObject){
    this.userCollection.push(user);
    this.storage.set('users', this.userCollection);
  }
  removeUserToCollection(user:UserObject){
    const postion = this.userCollection.findIndex((userRemove:UserObject) => {
      return userRemove.getUsername() == user.getUsername();
    });
    this.userCollection.splice(postion,1);
  }

  getUserCollection(){

    return this.storage.get('users')
      .then(
        (userCollection) => {
          this.userCollection = userCollection == null ? [] : userCollection;
          return this.userCollection.length;
        }
      )
  }
  getCollection(){
    return this.userCollection;
  }

}
