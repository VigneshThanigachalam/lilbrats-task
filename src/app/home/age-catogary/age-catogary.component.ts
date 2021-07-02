import { Component, OnInit } from '@angular/core';
import * as data from '../../data/kids-catogary.json'

@Component({
  selector: 'app-age-catogary',
  templateUrl: './age-catogary.component.html',
  styleUrls: ['./age-catogary.component.scss']
})
export class AgeCatogaryComponent implements OnInit {

 datalist=[

      {
        "id": 1,
        "name": "0-6M",
        "imageUrl": "../../../assets/images/age-catogary/0-6.png",
        "link":"#"
      },
    {
      "id": 2,
      "name": "6-12M",
      "imageUrl": "../../assets/images/age-catogary/1-2.png",
      "link":"#"
    },
    {
      "id": 3,
      "name": "1-2Y",
      "imageUrl": "../../assets/images/age-catogary/2-4.png",
      "link":"#"
    },
    {
      "id": 4,
      "name": "2-4Y",
      "imageUrl": "../../assets/images/age-catogary/4-6.png",
      "link":"#"
    },
    {
      "id": 5,
      "name": "4-6Y",
      "imageUrl": "../../assets/images/age-catogary/6-8.png",
      "link":"#"
    },  {
      "id": 6,
      "name": "6-8Y",
      "imageUrl": "../../assets/images/age-catogary/6-12.png",
      "link":"#"
    },
    {
      "id": 7,
      "name": "8-10Y",
      "imageUrl": "../../assets/images/age-catogary/8-10.png",
      "link":"#"
    },
    {
      "id": 8,
      "name": "10-14Y",
      "imageUrl": "../../assets/images/age-catogary/10-14.png",
      "link":"#"
    }
  ];
  constructor() { }

  ngOnInit() {

    console.log(this.datalist);
  }

}
