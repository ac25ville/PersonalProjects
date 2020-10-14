import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduSkillsComponent } from './edu-skills.component';

describe('EduSkillsComponent', () => {
  let component: EduSkillsComponent;
  let fixture: ComponentFixture<EduSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
