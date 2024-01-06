import { Time } from './Time';
import './style/Buttons.css';

export class Buttons {
  private buttons: HTMLElement;
  private mode: number;

  constructor(private time_instance: Time) {
    this.mode = 0;
    this.buttons = document.createElement('div');
    this.buttons.className = 'buttons';
    const change_mode = document.createElement('button');
    change_mode.textContent = 'Mode';
    change_mode.addEventListener('click', this.handle_change_mode.bind(this));

    this.buttons.appendChild(change_mode);
  }

  render(container: HTMLElement): void {
    container.appendChild(this.buttons);
  }

  private handle_change_mode(): void {
    this.mode = (this.mode + 1) % 3;
    this.change_mode();
    this.update_buttons();
    this.time_instance.update_time();
  }

  private update_buttons(): void {}

  private change_mode(): void {
    switch (this.mode) {
      case 0: {
        this.time_instance.change_hours = false;
        this.time_instance.change_minutes = false;
      }
      case 1: {
        this.time_instance.change_hours = true;
        this.time_instance.change_minutes = false;
      }
      case 1: {
        this.time_instance.change_hours = false;
        this.time_instance.change_minutes = true;
      }
    }
  }
}
