import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poduct-catogary',
  templateUrl: './poduct-catogary.component.html',
  styleUrls: ['./poduct-catogary.component.scss']
})
export class PoductCatogaryComponent implements OnInit {

  constructor() { }


  datalist=[
    {
      "id":1,
      "name":"Kurta Sets",
      "imageurl":"../../assets/images/age-catogary/seasonedits/s1.jpg",
    },
    {
      "id":2,
      "name":"Shorts",
      "imageurl":"../../assets/images/age-catogary/seasonedits/s2.jpg",
    },
    {
      "id":3,
      "name":"Half Sleeves Shirt",
      "imageurl":"../../assets/images/age-catogary/seasonedits/s3.jpg",
    },
    {
      "id":4,
      "name":"Full Sleeves Shirt",
      "imageurl":"../../assets/images/age-catogary/seasonedits/s4.jpg",
    },
    {
      "id":5,
      "name":"Waist Coat Sets",
      "imageurl":"../../assets/images/age-catogary/seasonedits/s5.jpg",
    },
    {
      "id":6,
      "name":"Rompers",
      "imageurl":"../../assets/images/age-catogary/seasonedits/s6.jpg",
    },
    {
      "id":7,
      "name":"Suits",
      "imageurl":"../../assets/images/age-catogary/seasonedits/s7.jpg",
    },
    {
      "id":8,
      "name":"T.shirts",
      "imageurl":"../../assets/images/age-catogary/seasonedits/s8.jpg",
    },
  ]

  ngOnInit(): void {
  }

}
