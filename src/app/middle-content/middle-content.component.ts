import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../sidebar/sidebar.component'; 
import { TimelineComponent } from '../timeline/timeline.component'; 
import { ClassifierBarComponent } from '../classifier-bar/classifier-bar.component'; 

@Component({
  selector: 'app-middle-content',
  standalone: true,
  imports: [NavbarComponent, SideBarComponent, TimelineComponent, ClassifierBarComponent],
  templateUrl: './middle-content.component.html',
  styleUrl: './middle-content.component.css'
})
export class MiddleContentComponent {

}
