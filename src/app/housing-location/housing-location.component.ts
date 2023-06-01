import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {}
