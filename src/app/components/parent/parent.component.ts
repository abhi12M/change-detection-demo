import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [DataService]//parent level service instance
})
export class ParentComponent {
  name: string = 'Ajay';
  address = { city: 'Banglore' };
  childData: number = 0;
  constructor() { }

  updateParentData() {
    this.name = 'Raj';
    this.address.city = 'Delhi'
  }

  updateChildData() {
    this.childData++;
  }

}
