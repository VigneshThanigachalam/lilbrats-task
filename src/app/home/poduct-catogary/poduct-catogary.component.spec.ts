import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductCatogaryComponent } from './poduct-catogary.component';

describe('PoductCatogaryComponent', () => {
  let component: PoductCatogaryComponent;
  let fixture: ComponentFixture<PoductCatogaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductCatogaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductCatogaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
