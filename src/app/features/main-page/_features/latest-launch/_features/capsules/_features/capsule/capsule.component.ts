import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CapsuleService } from 'src/app/core/api/capsule.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss'],
})
export class CapsuleComponent implements OnInit {
  @Input()
  public capsuleId: string = '';

  public capsuleType: string = '';
  public capsuleSerial: string = '';

  constructor(
    private capsuleService: CapsuleService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchCapsule();
  }

  fetchCapsule() {
    this.capsuleService.getCapsule(this.capsuleId).subscribe({
      next: (res) => {
        this.capsuleType = res.type;
        this.capsuleSerial = res.serial;
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
