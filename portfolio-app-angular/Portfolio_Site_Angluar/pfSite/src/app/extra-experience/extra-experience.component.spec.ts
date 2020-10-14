import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraExperienceComponent } from './extra-experience.component';

describe('ExtraExperienceComponent', () => {
  let component: ExtraExperienceComponent;
  let fixture: ComponentFixture<ExtraExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
