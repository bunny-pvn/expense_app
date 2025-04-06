import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeimageComponent } from './homeimage.component';

describe('HomeimageComponent', () => {
  let component: HomeimageComponent;
  let fixture: ComponentFixture<HomeimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
