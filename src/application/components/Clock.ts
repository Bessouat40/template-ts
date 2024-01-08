import './style/Clock.css';
import { Time } from './Time';

export class Clock {
  private clock: HTMLElement;
  private title: HTMLElement;
  public time: Time;
  public lights: boolean;

  constructor() {
    this.time = new Time();
    this.lights = true;
    this.clock = document.createElement('div');
    this.clock.className = 'clock';
    this.title = document.createElement('h1');
    this.title.className = 'title';
    this.update_theme();
    this.title.textContent = 'Garmin';
    this.clock.appendChild(this.title);
    this.time.render(this.clock);
  }

  render(container: HTMLElement): void {
    container.appendChild(this.clock);
    container.className = 'container';
  }

  update_theme(): void {
    if (this.lights) {
      this.clock.classList.remove('dark');
      this.title.classList.remove('dark');
      this.time.time.classList.remove('dark');
    } else {
      this.clock.classList.add('dark');
      this.title.classList.add('dark');
      this.time.time.classList.add('dark');
    }
  }
}
