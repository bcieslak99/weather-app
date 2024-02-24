import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherInformationPanelComponent } from './current-weather-information-panel.component';

describe('CurrentWeatherInformationsPanelComponent', () => {
  let component: CurrentWeatherInformationPanelComponent;
  let fixture: ComponentFixture<CurrentWeatherInformationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherInformationPanelComponent]
    });
    fixture = TestBed.createComponent(CurrentWeatherInformationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
