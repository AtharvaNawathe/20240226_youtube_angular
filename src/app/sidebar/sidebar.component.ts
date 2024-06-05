import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [[RouterLink, RouterOutlet, CommonModule]],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SideBarComponent {
  subs: Array<{ img_srcs: string; name: string }> = [
    { img_srcs: './assets/images/Atharva_1.jpg', name: 'Blast premere' },
    {
      img_srcs:'./assets/images/Atharva_2.jpeg',
      name:'Monkey Magic'
    },
    {
      img_srcs:'./assets/images/Atharva_3.jpeg',
      name:'ESL'
    },
    {
      img_srcs:'./assets/images/Atharva_4.jpg',
      name:'Sam Sulek'
    },
    {
      img_srcs:'./assets/images/Atharva_5.jpeg',
      name:'Team Liquid'
    }
  ];
}

