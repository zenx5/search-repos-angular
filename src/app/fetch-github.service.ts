import { Injectable } from '@angular/core';

const __KEY_STORAGE__ = 'storage--github'

@Injectable({
  providedIn: 'root'
})
export class FetchGithubService {
  repos:any[] = []

  async getRepos(username:string, force:boolean = false){
    this.loadStorage()
    if( !force && this.repos.length>0 ) return
    try{
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      this.repos = await response.json()
      return this.repos
    }
    catch(e) {
      this.repos = []
      return []
    }
    finally {
      this.saveStorage()
    }
  }

  loadStorage() {
    const result = sessionStorage.getItem(__KEY_STORAGE__)
    if( !result ) return
    this.repos = JSON.parse( result )
  }

  saveStorage() {
    sessionStorage.setItem(__KEY_STORAGE__, JSON.stringify(this.repos))
  }

}
