import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LatestLaunchService } from 'src/app/core/api/latest-launch.service';

@Component({
  selector: 'app-wrapper-image',
  templateUrl: './wrapper-image.component.html',
  styleUrls: ['./wrapper-image.component.scss'],
})
export class WrapperImageComponent implements OnInit {
  public latestLaunchName: string = '';
  public latestLaunchDate: number = 0;

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
        this.latestLaunchName = res.name;
        this.latestLaunchDate = res.date_unix * 1000;
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
