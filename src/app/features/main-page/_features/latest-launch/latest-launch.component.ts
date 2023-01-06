import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LatestLaunchService } from 'src/app/core/api/latest-launch.service';

@Component({
  selector: 'app-latest-launch',
  templateUrl: './latest-launch.component.html',
  styleUrls: ['./latest-launch.component.scss']
})
export class LatestLaunchComponent implements OnInit {
  public latestLaunchCrewMembersId: Array<string> = [];
  public latestLaunchRocketId: string = '5e9d0d95eda69973a809d1ec';
  public latestLaunchCapsulesId: Array<string> = [];

  constructor(
    private latestLaunchService: LatestLaunchService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.fetchLatestLaunch();
  }

  ngOnInit(): void {}

  async fetchLatestLaunch() {
    this.latestLaunchService.getLatestLaunch().subscribe({
      next: (res) => {
        this.latestLaunchCrewMembersId = res.crew;
        this.latestLaunchRocketId = res.rocket;
        this.latestLaunchCapsulesId = res.capsules;
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
