import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import axios  from 'axios';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
firstName:string=""
lastName:string=""
email:string=""
phone:string=""
dob:any
image_user:string=""
id:any
users:any

posts:any
user: any
key:any

  constructor() { }
 

  ngOnInit(): void {
    // axios
    //   .get("http://localhost:3001/api/items/user/")
    //   .then((result)=>{
    //     this.firstName=result.data[0].firstName
    //     console.log(this.firstName)
    //     this.lastName=result.data[0].lastName
    //     this.email=result.data[0].email
    //     this.phone=result.data[0].phone
    //     this.dob=result.data[0].dob
    //     this.image_user=result.data[0].image_user
        
    //     this.users = [result.data[0]]
    //     console.log(this.user)
        
    //   })
      
    this.key = localStorage.getItem("key");
    
      this.user = JSON.parse(localStorage.getItem("user")!);    
    console.log(this.user);
    var id = this.user.id_user
    axios
      .get(`http://localhost:3001/api/items/user/`+id)
      .then((result) => {
        this.firstName=result.data[0].firstName
        console.log(this.firstName)
        this.lastName=result.data[0].lastName
        this.email=result.data[0].email
        this.phone=result.data[0].phone
        this.dob=result.data[0].dob
        this.image_user=result.data[0].image_user
        
        this.users = [result.data[0]]
        console.log(this.users)
        
        
        // location.reload();
        // localStorage.setItem("posts", JSON.stringify(this.posts));
      });
    }



}
