import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ComponentType } from '@angular/cdk/overlay';
import { User } from '../../shared/models/user.model';
import { DialogService } from '../../core/services/dialog.service';
import { LoginForm } from '../../shared/models/login-form.model';
import { UserData } from '../../shared/models/user-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public returnUrl!: string;
  public userData$ = new BehaviorSubject<UserData | null>(null);
  public selectedTabIndex$ = new BehaviorSubject<number>(0);
  private localStorageItemName = 'token';
  private token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJmb28iOiJiYXIiLCJpYXQiOjE2ODUyOTcwMTd9.jxFRXq1iAb4Rm5nbABHrplxNWQLu-PynXL0uVIOZmbE';

  constructor(private router: Router, private dialogService: DialogService) {}

  public setToken(): void {
    localStorage.setItem(this.localStorageItemName, this.token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.localStorageItemName);
  }

  public register(user: User): Observable<User> {
    return of(user);
  }

  public openAuthModal(
    component: ComponentType<unknown>,
    returnUrl?: string
  ): void {
    this.returnUrl = returnUrl ?? '';
    this.dialogService.openDialog(component);
  }

  public login(form: LoginForm): Observable<LoginForm> {
    return of(form);
  }
}
