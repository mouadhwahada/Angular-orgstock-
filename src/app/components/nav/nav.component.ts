import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'; // Import MatMenuModule

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,RouterModule,MatMenuModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
