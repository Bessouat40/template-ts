import { Time } from './Time';
import './style/Buttons.css';

export class Buttons {
  private buttons: HTMLElement;
  private mode: number;
  private current_mode: HTMLElement;
  private change_mode: HTMLElement;
  private increase: HTMLButtonElement;
  private decrease: HTMLButtonElement;
  private reset: HTMLButtonElement;

  constructor(private time_instance: Time) {
    this.mode = 0;
    this.buttons = document.createElement('div');
    this.buttons.className = 'buttons';
    this.current_mode = document.createElement('h1');
    this.buttons.appendChild(this.current_mode);
    this.change_mode = document.createElement('button');
    this.change_mode.textContent = 'Mode';
    this.change_mode.addEventListener(
      'click',
      this.handle_change_mode.bind(this)
    );
    this.buttons.appendChild(this.change_mode);
    this.increase = document.createElement('button');
    this.increase.textContent = 'Increase';
    this.increase.addEventListener('click', this.handle_increase.bind(this));
    this.buttons.appendChild(this.increase);
    this.increase = document.createElement('button');
    this.decrease.textContent = 'Decrease';
    this.decrease.addEventListener('click', this.handle_decrease.bind(this));
    this.buttons.appendChild(this.decrease);
    const decrease = document.createElement('button');
    this.reset = document.createElement('button');
    this.reset.textContent = 'Reset';
    this.reset.addEventListener('click', this.handle_reset.bind(this));
    this.buttons.appendChild(this.reset);
    this.update_buttons_state();
  }

  render(container: HTMLElement): void {
    container.appendChild(this.buttons);
  }

  private handle_increase(): void {
    this.increase_time();
    this.time_instance.update_time();
  }

  private handle_decrease(): void {
    this.decrease_time();
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
  private decrease_time(): void {
    switch (this.mode) {
      case 1: {
        this.time_instance.increase_hours--;
        break;
      }
      case 2: {
        this.time_instance.increase_minutes--;
        break;
      }
    }
  }

  private handle_change_mode(): void {
    this.mode++;
    this.mode = this.mode % 3;
    this.update_buttons_state();
  }

  private update_buttons_state(): void {
    switch (this.mode) {
      case 0: {
        this.current_mode.textContent = '';
        this.increase.disabled = true;
        break;
      }
      case 1: {
        this.current_mode.textContent = 'Change hours';
        this.increase.disabled = false;
        break;
      }
      case 2: {
        this.current_mode.textContent = 'Change minutes';
        this.increase.disabled = false;
        break;
      }
    }
  }

  private handle_reset(): void {
    this.time_instance.increase_hours = 0;
    this.time_instance.increase_minutes = 0;
  }
}
