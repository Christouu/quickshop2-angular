import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSmallComponent } from './widget-small.component';

describe('WidgetSmallComponent', () => {
  let component: WidgetSmallComponent;
  let fixture: ComponentFixture<WidgetSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
