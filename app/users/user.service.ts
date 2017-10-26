import { Injectable } from '@angular/core';
import { User } from './user';
import { USER_LIST } from './user-data';
import { findIndex } from 'lodash';

@Injectable()
export class UserService{
private uList = USER_LIST;


getUsersFromData():User[] {
 console.log(this.uList);
 return this.uList;
    
}

addUser(user: User){
    this.uList.push(user);
    console.log(this.uList);
}

updateUser(user: User){
 let index = findIndex(this.uList,(u: User) =>{
     return u.id === user.id;
 });

    this.uList[index] = user;
}
    
deleteUser(user: User){
    this.uList.splice(this.uList.indexOf(user), 1);
    console.log(this.uList);
}

}


//    getUsersFromService(): User[]{
//        return[{
//            id: 1,
//            username: 'ABC',
//            email: 'abc@email.com',
//            age: 20
//        },{
//            id: 2,
//            username: 'DEF',
//            email: 'def@email.com',
//            age: 30
//        },{
//            id: 3,
//            username: 'GHI',
//            email: 'ghi@email.com',
//            age: 40
//               
//               
//        }]
//    }