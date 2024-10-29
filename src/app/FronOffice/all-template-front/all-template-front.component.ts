import { Component } from '@angular/core';
import { HeaderFrontComponent } from "../header-front/header-front.component";

@Component({
  selector: 'app-all-template-front',
  standalone: true,
  imports: [HeaderFrontComponent],
  templateUrl: './all-template-front.component.html',
  styleUrl: './all-template-front.component.css'
})
export class AllTemplateFrontComponent {

}
