import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCatogaryComponent } from './age-catogary.component';

describe('AgeCatogaryComponent', () => {
  let component: AgeCatogaryComponent;
  let fixture: ComponentFixture<AgeCatogaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeCatogaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeCatogaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
