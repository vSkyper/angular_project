import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeslaRoadsterService } from 'src/app/core/api/tesla-roadster.service';
import { Information } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-tesla-roadster',
  templateUrl: './tesla-roadster.component.html',
  styleUrls: ['./tesla-roadster.component.scss'],
})
export class TeslaRoadsterComponent implements OnInit {
  public teslaRoadsterImages: Array<string> = [];
  public teslaRoadsterInformationList: Array<Information> = [];

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
        let datePipe = new DatePipe('en-US');
        let decimalPipe = new DecimalPipe('en-US');

        this.teslaRoadsterImages = res.flickr_images;
        this.teslaRoadsterInformationList.push({
          title: 'Launch date',
          desc: `${datePipe.transform(
            res.launch_date_utc,
            'MMM d, y, h:mm:ss a'
          )}`,
        });
        this.teslaRoadsterInformationList.push({
          title: 'Mass',
          desc: `${res.launch_mass_kg} kg`,
        });
        this.teslaRoadsterInformationList.push({
          title: 'Speed',
          desc: `${decimalPipe.transform(res.speed_kph, '.2-2')} km/h`,
        });
        this.teslaRoadsterInformationList.push({
          title: 'Period',
          desc: `${decimalPipe.transform(res.period_days, '.2-2')} days`,
        });
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
