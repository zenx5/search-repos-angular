import { Injectable } from '@angular/core';

const __KEY_STORAGE__ = 'storage--github'

@Injectable({
  providedIn: 'root'
})
export class FetchGithubService {
  loading:boolean = false
  fetched:boolean = false
  repos:any[] = []

  async getRepos(username:string, force:boolean = false){
    this.loadStorage()
    if( !force && this.repos.length>0 ) return
    try{
      this.loading = true
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      this.repos = await response.json()
      this.fetched = true
      return this.repos
    }
    catch(e) {
      this.repos = []
      return []
    }
    finally {
      this.saveStorage()
      this.loading = false
    }
  }

  loadStorage() {
    const result = sessionStorage.getItem(__KEY_STORAGE__)
    if( !result ) return
    this.repos = JSON.parse( result )
    this.fetched = false
  }

  saveStorage() {
    sessionStorage.setItem(__KEY_STORAGE__, JSON.stringify(this.repos))
  }

}
