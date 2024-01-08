import { Clock } from './Clock';
import { Time } from './Time';
import './style/Buttons.css';
import { Lights } from './subcomponents/Lights';

export class Buttons {
  private buttons: HTMLElement;
  private mode: number;
  private current_mode: HTMLElement;
  private change_mode: HTMLElement;
  private increase: HTMLButtonElement;
  private decrease: HTMLButtonElement;
  private reset: HTMLButtonElement;
  private lights: Lights;

  constructor(private time_instance: Time, private clock_instance: Clock) {
    this.mode = 0;
    this.buttons = document.createElement('div');
    this.buttons.className = 'buttons';
    this.current_mode = document.createElement('h1');
    this.buttons.appendChild(this.current_mode);
    this.change_mode = document.createElement('button');
    this.change_mode.className = 'custom-button';
    this.change_mode.textContent = 'Mode';
    this.change_mode.addEventListener(
      'click',
      this.handle_change_mode.bind(this)
    );
    this.buttons.appendChild(this.change_mode);
    this.increase = document.createElement('button');
    this.increase.className = 'custom-button';
    this.increase.textContent = 'Increase';
    this.increase.addEventListener('click', this.handle_increase.bind(this));
    this.buttons.appendChild(this.increase);
    this.decrease = document.createElement('button');
    this.decrease.className = 'custom-button';
    this.decrease.textContent = 'Decrease';
    this.decrease.addEventListener('click', this.handle_decrease.bind(this));
    this.buttons.appendChild(this.decrease);
    this.reset = document.createElement('button');
    this.reset.className = 'custom-button';
    this.reset.textContent = 'Reset';
    this.reset.addEventListener(
      'click',
      this.time_instance.reset_time.bind(this.time_instance)
    );
    this.buttons.appendChild(this.reset);
    this.lights = new Lights(this.clock_instance);
    this.lights.render(this.buttons);
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
        this.time_instance.increase_hours =
          (this.time_instance.increase_hours - 1 + 24) % 24;
        break;
      }
      case 2: {
        this.time_instance.increase_minutes =
          (this.time_instance.increase_minutes - 1 + 60) % 60;
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
        this.decrease.disabled = true;
        break;
      }
      case 1: {
        this.current_mode.textContent = 'Change hours';
        this.increase.disabled = false;
        this.decrease.disabled = false;
        break;
      }
      case 2: {
        this.current_mode.textContent = 'Change minutes';
        this.increase.disabled = false;
        this.decrease.disabled = false;
        break;
      }
    }
  }
}
