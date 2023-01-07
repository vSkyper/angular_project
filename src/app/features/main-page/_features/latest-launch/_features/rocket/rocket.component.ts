import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { RocketService } from 'src/app/core/api/rocket.service';
import { Information } from 'src/app/core/models/interfaces/information/information.interface';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss'],
})
export class RocketComponent implements OnInit {
  @Input()
  public rocketId: string = '';

  public rocketInformationList: Array<Information> = [];

  constructor(
    private rocketService: RocketService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.fetchRocket();
  }

  fetchRocket() {
    if (this.rocketId === '') return;

    this.rocketService.getRocket(this.rocketId).subscribe({
      next: (res) => {
        this.rocketInformationList.push({
          title: 'Name:',
          desc: res.name,
        });
        this.rocketInformationList.push({
          title: 'Height:',
          desc: `${res.height.meters} meters`,
        });
        this.rocketInformationList.push({
          title: 'Diameter:',
          desc: `${res.diameter.meters} meters`,
        });
        this.rocketInformationList.push({
          title: 'Mass:',
          desc: `${res.mass.kg} kg`,
        });
        this.rocketInformationList.push({
          title: 'First flight:',
          desc: res.first_flight,
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
