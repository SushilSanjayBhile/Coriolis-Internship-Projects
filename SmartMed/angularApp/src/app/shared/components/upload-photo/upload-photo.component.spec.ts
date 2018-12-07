import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhotoOption2Component } from './upload-photo-option2.component';

describe('UploadPhotoOption2Component', () => {
  let component: UploadPhotoOption2Component;
  let fixture: ComponentFixture<UploadPhotoOption2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPhotoOption2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPhotoOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
