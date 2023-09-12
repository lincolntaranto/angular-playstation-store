import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label-gold',
  templateUrl: './card-label-gold.component.html',
  styleUrls: ['./card-label-gold.component.css']
})
export class CardLabelGoldComponent {
	@Input()
	gameLabelGold:string = ''
}
