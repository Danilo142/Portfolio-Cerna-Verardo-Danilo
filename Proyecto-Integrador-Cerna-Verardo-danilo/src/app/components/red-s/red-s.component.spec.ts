import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSComponent } from './red-s.component';

describe('RedSComponent', () => {
  let component: RedSComponent;
  let fixture: ComponentFixture<RedSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
