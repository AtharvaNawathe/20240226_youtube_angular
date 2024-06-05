import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassifierBarComponent } from '../classifier-bar/classifier-bar.component'; 
import { SideBarComponent } from '../sidebar/sidebar.component'; 
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-substream',
  standalone: true,
  imports: [    ClassifierBarComponent,
    SideBarComponent,
    NavbarComponent,
    RouterOutlet,
    CommonModule,],
  templateUrl: './substream.component.html',
  styleUrl: './substream.component.css'
})
export class SubstreamComponent {
  Subscriptions: Array<string> = [
    'Blast Premire',
    'Monkey Magic',
    'ESL',
    'Sam Sulek',
    'Team Liquid',
  ];

  feed: Array<{
    vdo_src: string;
    img_src: string;
    vdo_title: string;
    channel_name: string;
    view: string;
    time: string;
  }> = [
    {
      vdo_src:
        'https://buff.game/wp-content/uploads/2021/10/team-liquid-csgo-1024x685.jpg',
      img_src:
        './assets/images/Atharva_5.jpeg',
      vdo_title:
        'Won a Major!',
      channel_name: 'Team Liquid',
      view: '1 M views',
      time: '1 week ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vdo_title: "Rocketing to the Future: ISRO's Space Missions Unveiled",
      channel_name: 'ISRO',
      view: '5 M views',
      time: '5 weeks ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://plus.unsplash.com/premium_photo-1677511580659-f5fa0675a547?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vdo_title: "Beyond Earth's Horizon: Roscosmos' Space Exploration Story",
      channel_name: 'ROSCOSMOS',
      view: '876k views',
      time: '6 days ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://plus.unsplash.com/premium_photo-1677511580659-f5fa0675a547?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vdo_title: "Beyond Earth's Horizon: Roscosmos' Space Exploration Story",
      channel_name: 'ROSCOSMOS',
      view: '876k views',
      time: '6 days ago',
    },
    {
      vdo_src:
        'https://plus.unsplash.com/premium_photo-1679526019831-fb068ad10272?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://plus.unsplash.com/premium_photo-1677511580659-f5fa0675a547?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vdo_title: "Beyond Earth's Horizon: Roscosmos' Space Exploration Story",
      channel_name: 'ROSCOSMOS',
      view: '876k views',
      time: '6 days ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://plus.unsplash.com/premium_photo-1677511580659-f5fa0675a547?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vdo_title: "Beyond Earth's Horizon: Roscosmos' Space Exploration Story",
      channel_name: 'ROSCOSMOS',
      view: '876k views',
      time: '6 days ago',
    },
  ];

  filteredFeed: any[] = [];

  constructor() {
    this.filteredFeed = this.feed.filter((video) =>
      this.Subscriptions.includes(video.channel_name)
    );
  }

  filterBySubscription(subscription: string) {
    this.filteredFeed = this.feed.filter(
      (video) => video.channel_name === subscription
    );
  }
}

