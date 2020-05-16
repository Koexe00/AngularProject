import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileAllComponent } from './tile-all.component';

describe('TileAllComponent', () => {
  let component: TileAllComponent;
  let fixture: ComponentFixture<TileAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
