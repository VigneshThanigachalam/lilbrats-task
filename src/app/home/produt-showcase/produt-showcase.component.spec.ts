import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutShowcaseComponent } from './produt-showcase.component';

describe('ProdutShowcaseComponent', () => {
  let component: ProdutShowcaseComponent;
  let fixture: ComponentFixture<ProdutShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
