import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localities',
  templateUrl: './localities.component.html',
  styleUrls: ['./localities.component.scss']
})
export class LocalitiesComponent implements OnInit {
locality=["a","c","c","h","a","c","c","h","a","c","c","h","a","c","c","h"]
  constructor() { }

  ngOnInit(): void {
  }

}
