import { Clock } from './components/Clock';
import { Buttons } from './components/Buttons';
import './App.css';

export class App {
  private container: HTMLElement;
  private clock: Clock;
  private buttons: Buttons;

  constructor() {
    this.container = document.createElement('div');
    this.clock = new Clock();
    this.clock.render(this.container);
    this.buttons = new Buttons(this.clock.time);
    this.buttons.render(this.container);
  }

  render(container: HTMLElement): void {
    container.appendChild(this.container);
  }

  start(): void {
    this.container.className = 'application';
    document.getElementById('app')?.appendChild(this.container);
  }
}
