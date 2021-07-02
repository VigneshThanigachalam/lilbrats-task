import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.scss']
})
export class PreFooterComponent implements OnInit {

  constructor() { }


  datalist=[
    {
      "id":1,
      "name":"Checked Three Piece Suit",
      "price":"$4990",
      "imageurl":"../../assets/images/age-catogary/prefooter/p1.jpg",
    },
    {
      "id":2,
      "name":"Bold Three Piece Suit",
      "price":"₹4490",
      "imageurl":"../../assets/images/age-catogary/prefooter/p2.jpg",
    },
    {
      "id":3,
      "name":"Three Piece Suit In Pink",
      "price":"₹3990",
      "imageurl":"../../assets/images/age-catogary/prefooter/p3.jpg",
    },

  ]
  ngOnInit(): void {
  }

}
