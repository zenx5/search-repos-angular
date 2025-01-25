import { Component, Input } from '@angular/core';
import { LinkPathPipe } from '@pipes/link-path.pipe';

@Component({
  selector: 'repo-item',
  imports: [LinkPathPipe],
  templateUrl: './repo-item.component.html',
  styleUrl: './repo-item.component.css'
})
export class RepoItemComponent {
  @Input() name:string = ""
  @Input() url:string = ""
}
