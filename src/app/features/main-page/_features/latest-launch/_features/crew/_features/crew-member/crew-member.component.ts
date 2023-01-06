import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CrewService } from 'src/app/core/api/crew.service';

@Component({
  selector: 'app-crew-member',
  templateUrl: './crew-member.component.html',
  styleUrls: ['./crew-member.component.scss'],
})
export class CrewMemberComponent implements OnInit {
  @Input()
  public crewMemberId: string = '';

  public crewMemberName: string = '';
  public crewMemberAgency: string = '';

  constructor(
    private crewService: CrewService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchCrewMember();
  }

  fetchCrewMember() {
    this.crewService.getCrew(this.crewMemberId).subscribe({
      next: (res) => {
        this.crewMemberName = res.name;
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
