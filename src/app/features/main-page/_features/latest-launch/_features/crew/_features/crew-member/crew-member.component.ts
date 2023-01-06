import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CrewService } from 'src/app/core/api/crew.service';
import { CrewMember, _crewMember } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-crew-member',
  templateUrl: './crew-member.component.html',
  styleUrls: ['./crew-member.component.scss'],
})
export class CrewMemberComponent implements OnInit {
  @Input()
  public crewMember: CrewMember = _crewMember;

  public crewMemberName: string = '';
  public crewMemberRole: string = '';
  public crewMemberAgency: string = '';

  constructor(
    private crewService: CrewService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchCrewMember();
  }

  fetchCrewMember() {
    this.crewService.getCrew(this.crewMember.crew).subscribe({
      next: (res) => {
        this.crewMemberName = res.name;
        this.crewMemberRole = this.crewMember.role;
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
