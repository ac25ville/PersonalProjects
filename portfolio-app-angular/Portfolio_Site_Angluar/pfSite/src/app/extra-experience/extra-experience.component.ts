import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-experience',
  templateUrl: './extra-experience.component.html',
  styleUrls: ['./extra-experience.component.scss']
})
export class ExtraExperienceComponent implements OnInit {

  constructor() { }

  internalVP: string[] = [
    "Ensure that all members are familiar with fraternity by-laws", 
    "Meet with all officers to assess plans and goals for the semester and help achieve goals", 
    "Prepare a term calendar for all fraternity events and deadlines", 
    "Serve as a resource for all committees, attending meetings upon request",
    "Maintain a transition document that outlines all aspects of responsibilities",
    "Coordinate logistics of all meetings",
    "Serve as liaison for the Chief Engineer to all committees",
  ];

  externalVP: string[] = [
    "Serve as liaison to other Greek organizations both at MU and other campuses",
    "Responsible for managing social media accounts to promote our values",
    "Coordinate all chapter public relations within the community",
    "Oversee the chapter’s expansion plans to ensure we are growing as an organization",
  ];

  bikeMechanic: string[] = [
    "Fixed mechanical issues such as chain malfunctions and general tune-ups",
    "Interact with customers by describing their issues and questioning details",
    "Use often non-technical descriptions to find the cause for issues",
    "Ensure the best possible solution to make the customer happy",
    "Developed an app in my free time to enhance bike check in progress",
  ];

  shiftSupervisor: string[] = [
    "Oversaw servers to ensure residents’ needs are met",
    "Ensured efficiency among servers",
    "Organized the facility for special events and parties",
  ];

  ngOnInit(): void {
  }

}
