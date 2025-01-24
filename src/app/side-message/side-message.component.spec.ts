import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMessageComponent } from './side-message.component';

describe('SideMessageComponent', () => {
  let component: SideMessageComponent;
  let fixture: ComponentFixture<SideMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
