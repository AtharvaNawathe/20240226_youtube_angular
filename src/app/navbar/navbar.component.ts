import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropdownComponent,RouterLink,RouterOutlet,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user:{image_url:string, name: string} = {
    image_url: 'https://i.pinimg.com/originals/b2/9e/db/b29edb479bd00160302b6d3600526469.gif',
    name:'Atharva Nawathe'
  }
}
