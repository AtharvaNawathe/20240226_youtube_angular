import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierBarComponent } from './classifier-bar.component';

describe('ClassifierBarComponent', () => {
  let component: ClassifierBarComponent;
  let fixture: ComponentFixture<ClassifierBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassifierBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassifierBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
