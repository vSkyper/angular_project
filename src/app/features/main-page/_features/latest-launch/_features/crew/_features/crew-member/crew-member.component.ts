import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CrewMemberService } from 'src/app/core/api/crew-member.service';
import { LatestLaunchCrewMember, _latestLaunchCrewMember } from 'src/app/core/models/interfaces/latest-launch/latest-launch.interface';

@Component({
  selector: 'app-crew-member',
  templateUrl: './crew-member.component.html',
  styleUrls: ['./crew-member.component.scss'],
})
export class CrewMemberComponent implements OnInit {
  @Input()
  public latestLaunchCrewMember: LatestLaunchCrewMember = _latestLaunchCrewMember;

  public crewMemberName: string = '';
  public crewMemberRole: string = '';
  public crewMemberAgency: string = '';

  constructor(
    private crewService: CrewMemberService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchCrewMember();
  }

  fetchCrewMember() {
    this.crewService.getCrewMember(this.latestLaunchCrewMember.crew).subscribe({
      next: (res) => {
        this.crewMemberName = res.name;
        this.crewMemberRole = this.latestLaunchCrewMember.role;
        this.crewMemberAgency = res.agency;
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
