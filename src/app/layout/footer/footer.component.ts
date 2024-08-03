import { Component } from '@angular/core';
import MainConfigData from '../../../assets/config/Main.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  ContactNumberValue = MainConfigData.MainConfigData.find(item => item.configItem === "contactNumber" )?.value;
  ContactEmailValue = MainConfigData.MainConfigData.find(item => item.configItem === "contactEmail" )?.value
}
