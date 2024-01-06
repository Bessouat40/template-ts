import './style/Time.css';

export class Time {
  private time: HTMLElement;
  private display_current_time: HTMLElement;
  private current_time: Date;
  public change_hours: boolean;
  public change_minutes: boolean;
  public increase: number;

  constructor() {
    window.setInterval(() => this.update_time(), 1000);
    this.change_hours = false;
    this.change_minutes = false;
    this.increase = 0;
    this.time = document.createElement('div');
    this.time.className = 'time';
    this.current_time = new Date();
    this.display_current_time = document.createElement('h1');
    this.display_current_time.textContent = this.format_time(this.current_time);
    this.time.appendChild(this.display_current_time);
  }

  render(container: HTMLElement): void {
    container.appendChild(this.time);
  }

  private format_time(date: Date): string {
    const [hours, minutes] = this.format_minutes_hours(date);
    const display_hours = hours.toString().padStart(2, '0');
    const display_minutes = minutes.toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${display_hours}:${display_minutes}:${seconds}`;
  }

  private format_minutes_hours(date: Date): [number, number] {
    const increase_hours = this.increase * Number(this.change_hours);
    let hours = (date.getHours() + increase_hours) % 24;
    const increase_minutes = this.increase * Number(this.change_minutes);
    const minutes = (date.getMinutes() + increase_minutes) % 60;
    if (minutes < date.getMinutes()) {
      hours = (hours + 1) % 24;
    }
    return [hours, minutes];
  }

  public update_time(): void {
    const currentTime = new Date();
    this.display_current_time.textContent = this.format_time(currentTime);
  }

  private modify_time(
    increase: number,
    change_hours: boolean,
    change_minutes: boolean
  ): void {
    this.increase = increase;
    this.change_hours = change_hours;
    this.change_minutes = change_minutes;
    this.update_time();
  }
}
