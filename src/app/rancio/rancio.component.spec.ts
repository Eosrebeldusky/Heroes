import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RancioComponent } from './rancio.component';

describe('RancioComponent', () => {
  let component: RancioComponent;
  let fixture: ComponentFixture<RancioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RancioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RancioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
