import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval, takeWhile } from 'rxjs';
import {
  DayType,
  MonthType,
  WeekDayType,
  YearType,
} from 'src/app/shared/models/date.enums';
import { DateOptions } from 'src/app/shared/models/date.models';
import { Deadline } from 'src/app/shared/models/deadline.models';
import { DeadlinesService } from 'src/app/shared/services/deadlines.service';

@Component({
  selector: 'app-deadlines',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountDownComponent implements OnInit {
  data: Deadline = {} as Deadline;
  endDate: string = '';
  countdownTimer: number = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private deadlineService: DeadlinesService,
    private toastrService:ToastrService 
  ) {}

  ngOnInit(): void {
    this.getDeadlines();
  }

  ngOnDestroy(): void {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = 0;
    }
  }

  public getDeadlines(): void {
    this.deadlineService.getDeadlines().subscribe((res: Deadline) => {
      this.data = res;
      this.setEndDate();
      this.countdownObserver();
      this.cdr.markForCheck();
    }, err => {
      this.toastrService.error('Error occured while fetching data');
    });
  }

  public countdownObserver(): void {
    interval(1000)
      .pipe(takeWhile(() => this.data.secondsLeft > 0))
      .subscribe(
        (count: number) => {
          if (this.data.secondsLeft > 0) this.data.secondsLeft--;
          this.cdr.markForCheck();
        },
        (err) => {
          this.toastrService.error('Error occured while countdown');
        },
        () => {
          if (!(this.data.secondsLeft > 0)) {
            this.toastrService.success('Countdown completed!');
          }
        }
      );
  }

  public setEndDate(): void {
    const td = new Date();
    const options: DateOptions = {
      weekday: WeekDayType.long,
      year: YearType.numeric,
      month: MonthType.long,
      day: DayType.numeric,
      timeZone: 'America/Los_Angeles',
    };
    this.endDate = td.toLocaleDateString('en-US', options);
    this.cdr.markForCheck();
  }
}
