import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWithFooterComponent } from './contact-with-footer.component';

describe('ContactWithFooterComponent', () => {
  let component: ContactWithFooterComponent;
  let fixture: ComponentFixture<ContactWithFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactWithFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactWithFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
