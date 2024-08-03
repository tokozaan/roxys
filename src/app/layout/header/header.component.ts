import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import socialUrls from '../../../assets/config/SocialLinks.json';
import MainConfigData from '../../../assets/config/Main.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  siteNameValue = MainConfigData.MainConfigData.find(item => item.configItem === "SiteName" )?.value
  socials: any = [];
  LinkedInUrl = socialUrls.find(item => item.socialsite === "LinkedIn" )?.url
  MetaUrl = socialUrls.find(item => item.socialsite === "Meta" )?.url
  InstagramUrl = socialUrls.find(item => item.socialsite === "Instagram" )?.url
  xUrl = socialUrls.find(item => item.socialsite === "X" )?.url
  YoutubeUrl = socialUrls.find(item => item.socialsite === "Youtube" )?.url
  constructor(){}
  ngOnInit(){
    this.socials = socialUrls;
  }
}