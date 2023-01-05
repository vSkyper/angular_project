import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LatestLaunchService } from 'src/app/core/api/latest-launch.service';

@Component({
  selector: 'app-latest-launch',
  templateUrl: './latest-launch.component.html',
  styleUrls: ['./latest-launch.component.scss']
})
export class LatestLaunchComponent implements OnInit {
  public latestLaunch: any = {};

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
        this.latestLaunch = res;
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
