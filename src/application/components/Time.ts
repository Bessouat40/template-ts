import './style/Time.css';

export class Time {
  public time: HTMLElement;
  private display_current_time: HTMLElement;
  private current_time: Date;
  public change_hours: boolean;
  public change_minutes: boolean;
  public increase_minutes: number;
  public increase_hours: number;

  constructor() {
    window.setInterval(() => this.update_time(), 1000);
    this.change_hours = false;
    this.change_minutes = false;
    this.increase_minutes = 0;
    this.increase_hours = 0;
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
    const increase_hours = this.increase_hours;
    let hours = (date.getHours() + increase_hours) % 24;
    const increase_minutes = this.increase_minutes;
    const minutes = (date.getMinutes() + increase_minutes) % 60;
    return [hours, minutes];
  }

  public update_time(): void {
    const currentTime = new Date();
    this.display_current_time.textContent = this.format_time(currentTime);
  }

  public modify_time(): void {
    this.update_time();
  }

  public reset_time(): void {
    this.increase_hours = 0;
    this.increase_minutes = 0;
    this.update_time();
  }
}
