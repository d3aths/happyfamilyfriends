import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardProviderComponent } from './board-provider.component';

describe('BoardProviderComponent', () => {
  let component: BoardProviderComponent;
  let fixture: ComponentFixture<BoardProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
