import { Component, Input } from '@angular/core';
import { RepoItemComponent } from '@components/repo-item/repo-item.component';

@Component({
  selector: 'repo-list',
  imports: [RepoItemComponent],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css'
})
export class RepoListComponent {
  @Input() items:any[] = []
}
