import { Clock } from '../Clock';
import '../style/Lights.css';

export class Lights {
  private lights_button: HTMLButtonElement;
  private sun: HTMLElement;
  private moon: HTMLElement;

  constructor(private clock_instance: Clock) {
    this.init_lights_button();
    this.init_sun_button();
    this.init_moon_button();
    this.change_theme();
  }

  private init_lights_button(): void {
    this.lights_button = document.createElement('button');
    this.lights_button.addEventListener('click', this.change_theme.bind(this));
    this.lights_button.className = 'container';
  }

  private init_sun_button(): void {
    this.sun = document.createElement('div');
    this.sun.className = this.clock_instance.lights ? 'sun visible' : 'sun';
    this.lights_button.appendChild(this.sun);
  }

  private init_moon_button(): void {
    this.moon = document.createElement('div');
    this.moon.className = this.clock_instance.lights ? 'moon' : 'moon visible';
    this.lights_button.appendChild(this.moon);
  }

  private change_theme(): void {
    document.documentElement.style.backgroundColor = this.clock_instance.lights
      ? '#697965'
      : '#294023';
    this.clock_instance.lights = !this.clock_instance.lights;
    this.sun.className = this.clock_instance.lights ? 'sun' : 'sun visible';
    this.moon.className = this.clock_instance.lights ? 'moon visible' : 'moon';
    this.clock_instance.update_theme();
  }

  render(container: HTMLElement): void {
    container.appendChild(this.lights_button);
  }
}
