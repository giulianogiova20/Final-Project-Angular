import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  @Output() toggleSidebar = new EventEmitter()

  session$!: Observable<Session>

  constructor(
    private session: SessionService
  ){}

  ngOnInit() {
    this.session$ = this.session.getSession()
  }
}
