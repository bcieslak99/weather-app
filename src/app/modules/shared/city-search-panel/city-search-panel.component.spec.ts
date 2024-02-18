import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchPanelComponent } from './city-search-panel.component';

describe('CitySearchPanelComponent', () => {
  let component: CitySearchPanelComponent;
  let fixture: ComponentFixture<CitySearchPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchPanelComponent]
    });
    fixture = TestBed.createComponent(CitySearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
