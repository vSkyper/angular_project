import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperImageComponent } from './wrapper-image.component';

describe('WrapperImageComponent', () => {
  let component: WrapperImageComponent;
  let fixture: ComponentFixture<WrapperImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
