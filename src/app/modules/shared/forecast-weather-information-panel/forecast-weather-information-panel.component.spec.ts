import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeatherInformationPanelComponent } from './forecast-weather-information-panel.component';

describe('ForecastWeatherInformationPanelComponent', () => {
  let component: ForecastWeatherInformationPanelComponent;
  let fixture: ComponentFixture<ForecastWeatherInformationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastWeatherInformationPanelComponent]
    });
    fixture = TestBed.createComponent(ForecastWeatherInformationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
