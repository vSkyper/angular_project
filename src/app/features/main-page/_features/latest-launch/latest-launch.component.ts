import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LatestLaunchService } from 'src/app/core/api/latest-launch.service';
import { CrewMember } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-latest-launch',
  templateUrl: './latest-launch.component.html',
  styleUrls: ['./latest-launch.component.scss'],
})
export class LatestLaunchComponent implements OnInit {
  public latestLaunchCrewMembers: Array<CrewMember> = [];
  public latestLaunchRocketId: string = '';
  public latestLaunchCapsulesId: Array<string> = [];

  constructor(
    private latestLaunchService: LatestLaunchService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.fetchLatestLaunch();
  }

  ngOnInit(): void {}

  fetchLatestLaunch() {
    this.latestLaunchService.getLatestLaunch().subscribe({
      next: (res) => {
        this.latestLaunchCrewMembers = res.crew;
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
