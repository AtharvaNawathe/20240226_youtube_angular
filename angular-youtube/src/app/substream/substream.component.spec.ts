import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstreamComponent } from './substream.component';

describe('SubstreamComponent', () => {
  let component: SubstreamComponent;
  let fixture: ComponentFixture<SubstreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubstreamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
