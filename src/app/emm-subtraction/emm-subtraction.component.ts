import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emm-subtraction',
  templateUrl: './emm-subtraction.component.html',
  styleUrl: './emm-subtraction.component.css'
})
export class EmmSubtractionComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {

    }

    numberOne = 10;

    numberTwo = 12;

    total = -2;

    subtract = () => this.total = this.numberOne - this.numberTwo;

}
