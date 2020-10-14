import { Component, OnInit } from '@angular/core';

interface Skill{
  name: string;
  level: string;

}

const LEVELS: string[]= 
["Just Beginning to Practice","Practiced","Well Practiced"];

  const TECHSKILLS: Skill[] = [
    {name: "Java", level: LEVELS[2]},
    {name: "JavaFX", level: LEVELS[1]},
    {name: "C", level: LEVELS[1]},
    {name: "C#", level: LEVELS[0]},
    {name: "HTML", level: LEVELS[2]},
    {name: "CSS", level: LEVELS[2]},
    {name: "JavaScript", level: LEVELS[1]},
    {name: "PHP", level: LEVELS[1]},
    {name: "Python", level: LEVELS[0]},
    {name: "SQL", level: LEVELS[1]},
    {name: "Git", level: LEVELS[1]},
    {name: "PowerShell", level: LEVELS[0]},
    {name: "WSL2", level: LEVELS[0]},
    {name: "AWS", level: LEVELS[0]},
    {name: "Lamp Stack", level: LEVELS[1]},
    {name: "Flask", level: LEVELS[0]},
    {name: "MySQL", level: LEVELS[1]},
    {name: "Angular", level: LEVELS[1]},
    {name: "TypeScript", level: LEVELS[0]},
    {name: "MongoDB", level: LEVELS[0]},
    {name: "Node.js", level: LEVELS[0]},
    {name: "Mean Stack", level: LEVELS[0]}
  ];

@Component({
  selector: 'app-edu-skills',
  templateUrl: './edu-skills.component.html',
  styleUrls: ['./edu-skills.component.scss']
})



export class EduSkillsComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = TECHSKILLS.length;
  techSkills: Skill[];

  constructor() { 
    this.refreshSkills();
  }

  refreshSkills(){
    this.techSkills = TECHSKILLS
    .map((skill, i) => ({id: i + 1, ...skill}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  

  ngOnInit(): void {
  }

}