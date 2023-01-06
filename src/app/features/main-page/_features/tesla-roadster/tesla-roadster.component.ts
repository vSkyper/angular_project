import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeslaRoadsterService } from 'src/app/core/api/tesla-roadster.service';

@Component({
  selector: 'app-tesla-roadster',
  templateUrl: './tesla-roadster.component.html',
  styleUrls: ['./tesla-roadster.component.scss'],
})
export class TeslaRoadsterComponent implements OnInit {
  public teslaRoadsterImages: Array<string> = [];
  public teslaRoadsterLaunchDate: Date = new Date();
  public teslaRoadsterMass: string = '';
  public teslaRoadsterSpeed: string = '';
  public teslaRoadsterPeriodDays: string = '';

  constructor(
    private teslaRoadsterService: TeslaRoadsterService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.fetchTeslaRoadster();
  }

  ngOnInit(): void {}

  fetchTeslaRoadster() {
    this.teslaRoadsterService.getTeslaRoadster().subscribe({
      next: (res) => {
        this.teslaRoadsterImages = res.flickr_images;
        this.teslaRoadsterLaunchDate = res.launch_date_utc;
        this.teslaRoadsterMass = res.launch_mass_kg;
        this.teslaRoadsterSpeed = res.speed_kph;
        this.teslaRoadsterPeriodDays = res.period_days;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.changeDetectorRef.detectChanges();
      },
    });
  }
}
