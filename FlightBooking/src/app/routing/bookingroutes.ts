
import { BookFlightComponent } from "../booking/bookFlight.component";
import { BookingComponent } from "../booking/booking.component";
import { SearchComponent } from "../booking/search.component";
import { HistoryComponent } from "../history/history.component";
import { AuthguardService } from "../services/authguard.service";
import { TicketComponent } from "../ticket/ticket.component";

export const bookingroutes = [
  { path: '', component: BookingComponent },
  { path: 'Search', canActivate: [AuthguardService], component: SearchComponent },
  { path: 'BookFlight', canActivate: [AuthguardService], component: BookFlightComponent },
  { path: 'Ticket', canActivate: [AuthguardService], component: TicketComponent },
  { path: 'History', canActivate: [AuthguardService], component: HistoryComponent },

];


