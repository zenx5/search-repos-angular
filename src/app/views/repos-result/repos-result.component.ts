import { Component, OnInit } from '@angular/core';
import { FetchGithubService } from '../../services/fetch-github.service';
import { Router } from '@angular/router';
import { RepoListComponent } from '@components/repo-list/repo-list.component';

@Component({
  selector: 'repos-result',
  imports: [RepoListComponent],
  templateUrl: './repos-result.component.html',
  styleUrl: './repos-result.component.css'
})
export class ReposResultComponent implements OnInit {
  repos:any[] = []

  constructor(private githubService:FetchGithubService, private router:Router) {
    this.repos = githubService.repos
  }

  ngOnInit(){
    if( typeof sessionStorage !== 'undefined' ) {
      this.githubService.loadStorage()
      this.repos = this.githubService.repos
      if( this.repos.length === 0 ) {
        this.router.navigate(['/'])
      }
    }
  }
}
