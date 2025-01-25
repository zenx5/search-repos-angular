import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'form-repo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-repo.component.html',
  styleUrl: './form-repo.component.css'
})
export class FormRepoComponent {
  @Output() submitRepo = new EventEmitter<string>();
  user = new FormGroup({
    username: new FormControl('')
  })

  handleSubmit() {
    if( !this.user.value.username ) return
    this.submitRepo.emit( this.user.value.username )
  }
}
