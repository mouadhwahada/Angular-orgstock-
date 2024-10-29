import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, NavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
