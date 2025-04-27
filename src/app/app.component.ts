import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ApiResponse } from './interface/api.response';
import { Page } from './interface/page';
import { UserService } from './service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'paginaationApp';

  usersState$: Observable<{appState: string; appData?: ApiResponse<Page>; errors?: string;}>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.usersState$ = this.userService.users$().pipe(
      map((response: ApiResponse<Page>) => {
        console.log(response);
        return { appState: 'APP_LOADED', appData: response };
      }),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error })
      )
    );
  }
}
