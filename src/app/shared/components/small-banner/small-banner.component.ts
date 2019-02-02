import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-banner',
  templateUrl: './small-banner.component.html',
  styleUrls: ['./small-banner.component.scss']
})
export class SmallBannerComponent implements OnInit {

  @Input('title') title = '';

  constructor() { }

  ngOnInit() {
  }

}
