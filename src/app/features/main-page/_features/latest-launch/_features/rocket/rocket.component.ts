import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { RocketService } from 'src/app/core/api/rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss'],
})
export class RocketComponent implements OnInit {
  @Input()
  public rocketId: string = '';

  public rocketName: string = '';
  public rocketHeight: string = '';
  public rocketDiameter: string = '';
  public rocketMass: string = '';
  public rocketFirstFlight: string = '';

  constructor(
    private rocketService: RocketService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchRocket();
  }

  fetchRocket() {
    this.rocketService.getRocket(this.rocketId).subscribe({
      next: (res) => {
        this.rocketName = res.name;
        this.rocketHeight = res.height.meters;
        this.rocketDiameter = res.diameter.meters;
        this.rocketMass = res.mass.kg;
        this.rocketFirstFlight = res.first_flight;
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
