import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor() { }

@Input()
contactListNew;

  addNewContact(){

    var lastObj= this.contactListNew[this.contactListNew.length -1]

    console.log(this.contactListNew);
    this.contactListNew.push({
      seqNo: lastObj.seqNo,
      name: this.name,
      mobileNo: this.mobileNo,
      ringTone: this.ringTone
    });
    console.log(this.contactListNew);

  }

  ngOnInit() {
  }

}
