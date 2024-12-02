import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DataService]//root level service instance
})
export class AppComponent {
  title = 'change-detection-demo';
}
