import {UserObject} from "../objects/userObject";

export class UserService{

  private userCollection:UserObject[] = [];

  addUserToCollection(user:UserObject){
    this.userCollection.push(user);
  }
  removeUserToCollection(user:UserObject){
    const postion = this.userCollection.findIndex((userRemove:UserObject) => {
      return userRemove.getUsername() == user.getUsername();
    });
    this.userCollection.splice(postion,1);
  }

  getUserCollection(){
    return this.userCollection;
  }

}
