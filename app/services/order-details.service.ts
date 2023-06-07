import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  getOrderDetails() {
    throw new Error('Method not implemented.');
  }

  constructor() { }



  bagDetails =[
    {
      id:1,
      bagName:"Tempting white1",
      bagDetails:"leather",
      bagPrice:12997,
      bagImg: "../../assets/bag10_2.jpeg"
    },
    {
      id:2,
      bagName:"Tempting white2",
      bagDetails:"leather",
      bagPrice:12998,
      bagImg: "../../assets/bag11.jpeg" 
    },
    {
      id:3,
      bagName:"Tempting white3",
      bagDetails:"leather",
      bagPrice:12999,
      bagImg: "../../assets/bag12.jpeg" 
    },
  
    {
      id:4,
      bagName:"Tempting white4",
      bagDetails:"leather",
      bagPrice:1299,
      bagImg: "../../assets/bag13.jpeg" 
    },
  ]
   bagDetails1=[ 
    {
      id:5,
      bagName:"Tempting white5",
      bagDetails:"leather",
      bagPrice:1299,
      bagImg: "../../assets/bag1.jpeg"
  },
  {
    id:6,
    bagName:"Tempting white6",
    bagDetails:"leather",
    bagPrice:1299,
    bagImg: "../../assets/bag3.jpeg"
},
{
  id:7,
  bagName:"Tempting white7",
  bagDetails:"leather",
  bagPrice:1299,
  bagImg: "../../assets/bag4.jpeg"
},
{
  id:8,
  bagName:"Tempting white8",
  bagDetails:"leather",
  bagPrice:1299,
  bagImg: "../../assets/bag5.jpeg"
},

  ];
  
}

