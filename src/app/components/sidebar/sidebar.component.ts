import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatActionList } from '@angular/material/list'; // Import du module MatActionListModule
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatCardModule, MatActionList, MatIconModule, AppComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
