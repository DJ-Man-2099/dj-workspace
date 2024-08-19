import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedComponentsComponent } from './created-components.component';

describe('CreatedComponentsComponent', () => {
  let component: CreatedComponentsComponent;
  let fixture: ComponentFixture<CreatedComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
