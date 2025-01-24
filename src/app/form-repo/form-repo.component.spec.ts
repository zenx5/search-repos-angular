import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepoComponent } from './form-repo.component';

describe('FormRepoComponent', () => {
  let component: FormRepoComponent;
  let fixture: ComponentFixture<FormRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRepoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
