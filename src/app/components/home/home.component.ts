import { Component, OnInit } from '@angular/core';
import { Fair } from 'src/app/models/fair.model';
import { FairdataService } from 'src/app/services/fairdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  fair: Fair = new Fair();

  constructor(private readonly fairdataService: FairdataService) { }

  ngOnInit(): void {

    this.getFairData();
  }

  getFairData(): void{
    console.log('Llega aquí');
    this.fairdataService.getFairData().subscribe(
      fair => {
        this.fair.name = fair.fairName
        this.fair.locale = fair.defaultLocale.name;
      }
    );
  }
}
