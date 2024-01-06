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
    const increase = document.createElement('button');
    increase.textContent = 'Increase';
    increase.addEventListener('click', this.handle_increase.bind(this));
    this.buttons.appendChild(increase);
  }

  render(container: HTMLElement): void {
    container.appendChild(this.buttons);
  }

  private handle_increase(): void {
    this.increase_time();
    this.time_instance.update_time();
  }

  private increase_time(): void {
    switch (this.mode) {
      case 1: {
        this.time_instance.increase_hours++;
        break;
      }
      case 2: {
        this.time_instance.increase_minutes++;
        break;
      }
    }
  }

  private handle_change_mode(): void {
    this.mode++;
    this.mode = this.mode % 3;
    this.update_buttons();
  }

  private update_buttons(): void {}
}
