import { Component, OnInit } from '@angular/core';
import { FetchGithubService } from '../fetch-github.service';
import { LinkPathPipe } from '../link-path.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'repos-result',
  imports: [LinkPathPipe],
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
