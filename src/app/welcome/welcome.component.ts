import { Component } from '@angular/core';

type Tab = {
  title: string,
  url: string
};

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public tabs: Tab[] = [
    {
      title: 'Sign Up',
      url: '#signup'
    },
    {
      title: 'Log In',
      url: '#login'
    }
  ];

  public constructor(
  ) {}

  public onClick(event: any): void {
    event.preventDefault();
    if (event.target.tagName !== 'A') {
      return;
    }
    event.currentTarget.querySelectorAll('.tab__item')
      .forEach((item: HTMLElement) => item.classList.remove('tab__item--active'));
    event.target.classList.add('tab__item--active');

    event.currentTarget.nextElementSibling.querySelectorAll('.tab-content__item')
      .forEach((item: HTMLElement) => item.classList.remove('tab-content__item--active'));

    const target: HTMLElement = document.querySelector(event.target.getAttribute('href'));
    target.classList.add('tab-content__item--active');
  }

}
