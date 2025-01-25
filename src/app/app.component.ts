import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideFormComponent } from '@views/side-form/side-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
