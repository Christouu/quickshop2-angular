import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLargeComponent } from './widget-large.component';

describe('WidgetLargeComponent', () => {
  let component: WidgetLargeComponent;
  let fixture: ComponentFixture<WidgetLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
