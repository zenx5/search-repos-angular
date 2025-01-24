import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormRepoComponent } from './form-repo/form-repo.component';
import { FetchGithubService } from './fetch-github.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormRepoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  constructor(
    private githubService:FetchGithubService,
    private router:Router
  ){}

  async onQuery(username:string) {
    await this.githubService.getRepos(username)
    this.router.navigate(['/result'])
  }
}
