import './style/Clock.css';
import { Time } from './Time';

export class Clock {
  private clock: HTMLElement;
  private title: HTMLElement;
  public time: Time;

  constructor() {
    this.clock = document.createElement('div');
    this.clock.className = 'clock';
    this.title = document.createElement('h1');
    this.title.className = 'title';
    this.title.textContent = 'Garmin';
    this.clock.appendChild(this.title);
    this.time = new Time();
    this.time.render(this.clock);
  }

  render(container: HTMLElement): void {
    container.appendChild(this.clock);
    container.className = 'container';
  }
}
