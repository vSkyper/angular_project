import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CrewService } from 'src/app/core/api/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  @Input()
  public crewMemberId: any = null;

  public crewMemberName: string = '';

  constructor(
    private crewService: CrewService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.fetchCrewMember();
  }

  ngOnInit(): void {}

  async fetchCrewMember() {
    console.log(this.crewMemberId);
    this.crewService.getCrew(this.crewMemberId).subscribe({
      next: (res) => {
        console.log(res);
        this.crewMemberName = res.name;
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
