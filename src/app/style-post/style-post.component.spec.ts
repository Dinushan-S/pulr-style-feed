import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylePostComponent } from './style-post.component';

describe('StylePostComponent', () => {
  let component: StylePostComponent;
  let fixture: ComponentFixture<StylePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylePostComponent]
    });
    fixture = TestBed.createComponent(StylePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
