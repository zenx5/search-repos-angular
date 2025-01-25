import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposResultComponent } from './repos-result.component';

describe('ReposResultComponent', () => {
  let component: ReposResultComponent;
  let fixture: ComponentFixture<ReposResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReposResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
