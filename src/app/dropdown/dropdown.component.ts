import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  settingsMenuToggle(): void {
    const settingsmenu = document.querySelector(
      '.settings-menu'
    ) as HTMLElement;
    settingsmenu.classList.toggle('settings-menu-height');
  }

  user: { image_url: string; name: string } = {
    image_url:
      'https://i.pinimg.com/originals/b2/9e/db/b29edb479bd00160302b6d3600526469.gif',
    name: 'Atharva Nawathe',
  };
}
