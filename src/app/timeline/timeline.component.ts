import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
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
        'https://images.unsplash.com/photo-1574099698592-9df0e9f19f3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://ca-times.brightspotcdn.com/dims4/default/06e57fa/2147483647/strip/true/crop/2000x1730+0+0/resize/2000x1730!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0e%2F04%2F0109df824fe79d5e0290a5b33184%2F494a-making-of-kubrick-the-shining-ce-66983.jpg',
      vdo_title:
        'The Shinning Full Movie',
      channel_name: 'Shinning',
      view: '8 M views',
      time: '7 week ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1574099698592-9df0e9f19f3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://ca-times.brightspotcdn.com/dims4/default/06e57fa/2147483647/strip/true/crop/2000x1730+0+0/resize/2000x1730!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0e%2F04%2F0109df824fe79d5e0290a5b33184%2F494a-making-of-kubrick-the-shining-ce-66983.jpg',
      vdo_title: "The Shinning Full Movie",
      channel_name: 'Shinning',
      view: '1 M views',
      time: '1 month ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1574099698592-9df0e9f19f3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://ca-times.brightspotcdn.com/dims4/default/06e57fa/2147483647/strip/true/crop/2000x1730+0+0/resize/2000x1730!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0e%2F04%2F0109df824fe79d5e0290a5b33184%2F494a-making-of-kubrick-the-shining-ce-66983.jpg',
      vdo_title: "The Shinning Full Movie",
      channel_name: 'Shinning',
      view: '1 M views',
      time: '6 months ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1574099698592-9df0e9f19f3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://ca-times.brightspotcdn.com/dims4/default/06e57fa/2147483647/strip/true/crop/2000x1730+0+0/resize/2000x1730!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0e%2F04%2F0109df824fe79d5e0290a5b33184%2F494a-making-of-kubrick-the-shining-ce-66983.jpg',
      vdo_title: "The Shinning Full Movie",
      channel_name: 'Shinning',
      view: '100k views',
      time: '1 day ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1574099698592-9df0e9f19f3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://ca-times.brightspotcdn.com/dims4/default/06e57fa/2147483647/strip/true/crop/2000x1730+0+0/resize/2000x1730!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0e%2F04%2F0109df824fe79d5e0290a5b33184%2F494a-making-of-kubrick-the-shining-ce-66983.jpgD',
      vdo_title: "The Shinning FUll Movie",
      channel_name: 'Shinning',
      view: '1 M views',
      time: '1 month ago',
    },
    {
      vdo_src:
        'https://images.unsplash.com/photo-1574099698592-9df0e9f19f3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      img_src:
        'https://ca-times.brightspotcdn.com/dims4/default/06e57fa/2147483647/strip/true/crop/2000x1730+0+0/resize/2000x1730!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0e%2F04%2F0109df824fe79d5e0290a5b33184%2F494a-making-of-kubrick-the-shining-ce-66983.jpg',
      vdo_title: "The Shinning FUll Movie",
      channel_name: 'Shinning',
      view: '1 M views',
      time: '6 months ago',
    },
  ];
}
