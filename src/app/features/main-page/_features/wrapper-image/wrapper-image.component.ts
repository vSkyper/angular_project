import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LatestLaunchService } from 'src/app/core/api/latest-launch.service';

@Component({
  selector: 'app-wrapper-image',
  templateUrl: './wrapper-image.component.html',
  styleUrls: ['./wrapper-image.component.scss'],
})
export class WrapperImageComponent implements OnInit {
  public latestLaunchName: String = '';
  public latestLaunchDate: String = '';

  constructor(
    private latestLaunchService: LatestLaunchService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.fetchLatestLaunch();
  }

  ngOnInit(): void {}

  async fetchLatestLaunch() {
    const payload = await firstValueFrom(this.latestLaunchService.getLatestLaunch());
    this.latestLaunchName = payload.name;
    this.latestLaunchDate = new Date(payload.date_unix * 1000).toLocaleDateString();
    this.changeDetectorRef.detectChanges();
  }
}
