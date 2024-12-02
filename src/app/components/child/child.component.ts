import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush//it will re rerender only when @input changes or explicit call for change detection(this.cdr.markForCheck())
})
export class ChildComponent {
  @Input() childData: number = 0;
  localData: string = 'Child Local Data';
  asyncData = {
    timeOutData: 'initial async data',
    apiData: 'initial api data'
  };
  change = 0;//initial will be 1 then will 2 for timeoutdata and 3 for apidata when it come and so one whenever @input data changes

  constructor(
    public dataService: DataService,//DI (Dependency Injection)
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.asyncData.timeOutData = 'hi';
      this.cdr.markForCheck();
    }, 200);
    this.getApiData();
  }

  updateLocalData() {
    this.localData = 'Updated Child Local Data';
  }

  checkChange() {
    console.log("child");
    return ++this.change;
  }

  getApiData() {
    this.dataService.getData('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => {
      this.asyncData.apiData = res?.title;
      this.cdr.markForCheck();
    });
  }
}
