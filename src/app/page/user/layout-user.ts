import {Component} from '@angular/core';
import {Header} from '../../shared/component/header/header';
import {Footer} from '../../shared/component/footer/footer';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout-user',
  imports: [
    Header,
    Footer,
    RouterOutlet
  ],
  templateUrl: './layout-user.html',
  styleUrl: './layout-user.css',
})
export class LayoutUser {


}
