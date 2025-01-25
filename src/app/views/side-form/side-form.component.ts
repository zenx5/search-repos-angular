import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormRepoComponent } from '@components/form-repo/form-repo.component';
import { FetchGithubService } from '@services/fetch-github.service';

@Component({
  selector: 'side-form',
  imports: [FormRepoComponent],
  templateUrl: './side-form.component.html',
  styleUrl: './side-form.component.css'
})
export class SideFormComponent {
  loading:boolean = false

  constructor(
    private githubService:FetchGithubService,
    private router:Router
  ){}

  async onQuery(username:string) {
    this.loading = true
    await this.githubService.getRepos(username)
    this.loading = false
    this.router.navigate(['/result'])
  }
}
