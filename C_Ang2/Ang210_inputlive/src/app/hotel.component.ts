import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  private hotelName:string='California';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  constructor() {
    setTimeout(()=>{
      this.hotelName="Heartbreak Hotel";
    },3000);
  }

  getName():string {
    return this.hotelName;
  }

  getRooms():string {
    return this.rooms
      .map( room => "N"+room.num+"("+room.beds+"b)" )
      .join("\n")
      ;
  };

  getPhoto():string {
    return this.photo;
  };

}
