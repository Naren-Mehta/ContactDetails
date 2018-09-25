import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactList =[
    {seqNo:1, name:"Abesh", mobileNo:"1234567890",ringTone:"Tum n"},
    {seqNo:2, name:"Lokesh", mobileNo:"5555555777",ringTone:"Yo n"},
    {seqNo:3, name:"Ganesh", mobileNo:"3333555777",ringTone:"Ho n"},
    {seqNo:4, name:"Yogesh", mobileNo:"2225555777",ringTone:"Aa ja"},
    {seqNo:5,name:"Naresh", mobileNo:"99994567890",ringTone:"Na ja"},
  ]


  constructor() { }

  ngOnInit() {
  }

}
