import { Component, OnInit } from '@angular/core';
import MainConfigData from '../../../assets/config/Main.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  siteNameValue = MainConfigData.MainConfigData.find(item => item.configItem === "SiteName" )?.value
  constructor() {}
  ngOnInit() {

  }
}
