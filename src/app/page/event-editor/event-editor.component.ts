import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EventService } from './../../service/event.service';
import { Event } from './../../model/event';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {


  event$: Observable<Event> = this.ar.params.pipe(
    switchMap(params => this.eventService.get(params['id'])),
  );
  //  this.ar.params.pipe(
  //   switchMap(params => this.eventService.)
  // );

  constructor(
    private eventService: EventService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUpdate(ngForm: NgForm): void {
    this.eventService.update(ngForm.form.value).subscribe(
      event => this.router.navigate(['/', 'event']),
      console.log);
  }

}
