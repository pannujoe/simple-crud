import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'user.template.html'
})

export class UserComponent implements OnInit {
users: User[];
userForm: boolean = false;
editUserForm: boolean = false;
isNewForm: boolean;
newUser:any = {};
editedUser: any = {};
 
constructor(private _userService: UserService) {} 
  
ngOnInit() {
  this.getUsers();    
  }
 getUsers(){
     this.users = this._userService.getUsersFromData();
 }  

showEditUserForm(user: User){
    if(!user){
        this.userForm = false;
        return;
    }
    this.editUserForm = true;
    this.editedUser = clone(user);
}
    
showAddUserForm(){
    //resets form if edited product
    if(this.users.length){
        this.newUser = {};
    }
    this.userForm = true;
    this.isNewForm = true;
}

saveUser(user: User) {
    if(this.isNewForm){
    //add a new user
    this._userService.addUser(user);
    
    }
    this.userForm = false;

}
    
updateUser(){
 this._userService.updateUser(this.editedUser);
 this.editUserForm = false;
 this.editedUser = {};
}
    
removeUser(user: User){
    this._userService.deleteUser(user);
}
    
cancelNewUser(){
   this.newUser = {};
    this.userForm = false;
}

cancelEdits(){
this.editedUser = {};
this.editUserForm = false;
    }
    
}

















