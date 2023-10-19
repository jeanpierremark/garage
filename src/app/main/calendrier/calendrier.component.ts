import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent  {
 calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth', // Vue initiale du calendrier
  events: [ /* Liste des événements */ ],
};
}
