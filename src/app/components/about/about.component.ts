import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  heading1 = "Who We Are";
  content1 = "Moment for Women Alliance is a non-governmental organization that specializes in communication and media advocacy in the fields of Human rights, gender based violence, health, economic inclusion, disability inclusion, peace-building and democracy and women’s leadership inclusion in Africa."
  content1_2 = "Moment for Women Alliance is a movement for Gender Equality in Africa. MWA currently has over 100 members, individual and organization, from 10 countries across Africa. Our members are dedicated to achieving gender justice, sustainable development and human rights in Africa.";
  heading2 = "What We Do";
  content2 = "Promote peace, democracy, and inclusive governance and to end all forms of gender-based violence against women and girls in Nigeria and other African countries through policy advocacy, constructive engagement, movement building, conferences, media, and communication."
  content2_2 = "Educate, engage and empower women and girls for economic and financial inclusion and to advocate for the rights: leadership, economic and productive resources including right to inheritance and ownership of landed property and political participation of women and women with disabilities in Nigeria and other African countries.";
  content3 = "Serve as a movement, coalition and membership organization of women and women led non-profit organizations and foundations in Africa for the purpose of promoting women and girls’ rights."
  content3_2 = "Strengthen the capacity of individuals and organizational members of the alliance and to position them to contribute to the achievement of the objectives and goals of the alliance."
  content3_3 = "Promote the health and wellbeing of women and girls and to engage as Water Sanitation & Hygiene (WASH) promoters, and advocate for the right of women and women with disability, differing sexual orientation and status to help them access comprehensive sexual reproductive health services and care, end unsafe abortion, and AIDS, Tuberculosis (TB), Malaria and Cancer (ATMC) prevention, care and support.";

  constructor() { }

  ngOnInit() {
  }

}
