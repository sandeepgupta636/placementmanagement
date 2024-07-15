import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { signUp } from './data-type';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError,of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators';


import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {
  apiUrl='http://localhost:3000'
  private storageKey = 'currentUser';
  private accessToken = new BehaviorSubject<string | null>(null);
  url='http://localhost:3000/admin'

  constructor(private http:HttpClient,private router:Router) {
    this.initStorageListener()
   }

  // isLoggedIN(){
  //   return localStorage.getItem('token')!=null;
  // }  
  signUp(data:signUp){
   return  this.http.post('http://localhost:3000/admin',data)
  }
  userSignUp(data:signUp){
    return  this.http.post('http://localhost:3000/user',data)
   }



 
  //user login
   login(credentials: { name: string; password: string }): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin`).pipe(
      map(res => {
        const loggedInUser = res.find((a: any) => a.isLoggedIn);
        const admin = res.find(
          (a: any) => a.name === credentials.name && a.password === credentials.password
        );

        if (!admin) {
          throw new Error('Login failed');
        }

        if (loggedInUser && loggedInUser.name !== admin.name) {
          throw new Error('Another user is already logged in.');
        }

        return admin;
      }),
      tap(admin => {
        this.clearPreviousSession(admin).subscribe(() => {  
          this.updateLoginStatus(admin.id, true).subscribe(() => {
            this.setTokens('dummyAccessToken', 'dummyRefreshToken');
            localStorage.setItem(this.storageKey, JSON.stringify({ name: admin.name }));
            this.router.navigate(['admin-components']);
          });
        });
      }),
      catchError((error: HttpErrorResponse | Error) => {
        alert(error.message);
        return throwError(error);
      })
    );
  }

  private clearPreviousSession(admin: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin`).pipe(
      map(res => {
        const currentAdmin = res.find((a: any) => a.name === admin.name && a.isLoggedIn);
        if (currentAdmin) {
          return this.updateLoginStatus(currentAdmin.id, false).toPromise();
        }
        return null;
      })
    );
  }

  private updateLoginStatus(adminId: number, isLoggedIn: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/admin/${adminId}`, { isLoggedIn }).pipe(
      catchError((error: HttpErrorResponse) => {
        alert('Something went wrong');
        return throwError(error);
      })
    );
  }
  

logout(): void {
  const currentUser = this.getCurrentUser();
  if (currentUser) {
    const userConfirmed = confirm('Are you sure you want to log out?');
    if (userConfirmed) {
      this.http.get<any[]>(`${this.apiUrl}/admin`).pipe(
        switchMap(res => {
          const admin = res.find(a => a.name === currentUser.name);
          if (admin) {
            return this.updateLoginStatus(admin.id, false);
          } else {
            return of(null); // Return observable to continue chain
          }
        }),
        tap(() => {
          localStorage.removeItem(this.storageKey);
          this.router.navigate(['login']);
        })
      ).subscribe();
    }
  } else {
    this.router.navigate(['login']);
  }
}


  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  getCurrentUser(): any {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  
  
    getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }
  
  verifySession(): Observable<boolean> { //checking if a user is already logged in or not
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      return this.http.get<any>(`${this.apiUrl}/admin`).pipe(
        map(res => {
          const admin = res.find((a: any) => a.name === currentUser.name && a.isLoggedIn);
          return !!admin;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Session verification failed', error);
          return of(false);
        })
      );
    } else {
      this.router.navigate(['login']); //if no user found then navigating to login page

      return of(false); // No current user found
    }
  }
  public initStorageListener() {
    window.addEventListener('storage', (event) => {
      if (event.key === this.storageKey && !localStorage.getItem(this.storageKey)) {
        console.log('User logged out via storage event.');
        this.logout(); // Call logout method when storage indicates logout
      }
    });
  }
}




















   // logout(): void {
  //   const currentUser = this.getCurrentUser();
  //   if (currentUser) {
  //     this.http.get<any>(`${this.apiUrl}/admin`).pipe(
  //       map(res => res.find((a: any) => a.name === currentUser.name)),
  //       tap(admin => {
  //         if (admin) {
  //           this.updateLoginStatus(admin.id, false).subscribe(() => {
  //             localStorage.removeItem(this.storageKey);
  //             this.router.navigate(['login']);
  //           });
  //         }
  //       })
  //     ).subscribe();
  //   }else{
  //     this.router.navigate(['login']);
  //   }
  // }
  
  
  // public initStorageListener() {
  //   window.addEventListener('storage', (event) => {
  //     console.log('Storage event detected:', event);
  //     if (event.key === this.storageKey) {
  //       if (!localStorage.getItem(this.storageKey)) {
  //         const userConfirmed = confirm('You have been logged out. Do you want to log in again?');
  //         if (userConfirmed) {
  //           this.router.navigate(['login']);
  //         }
  //       }
  //     }
  //   });
  // }



  // private isSameUser(admin: any): boolean {
  //   const currentUser = this.getCurrentUser();
  //   return currentUser && currentUser.name === admin.name;
  // }


   // reloadAdmin(){
  //   const check=localStorage.getItem('token')
  //   if(check=='true'){
  //     this.router.navigate(['admin'])
  //   }
  // }


  // login(credentials: { name: string; password: string }): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/admin`).pipe(
      
  //     tap((res) => {
  //       const admin = res.find(
  //         (a: any) => a.name === credentials.name && a.password === credentials.password
  //       );
  //       if (admin) {
  //         if (admin.isLoggedIn){

  //           alert('Another user is already logged in.')
  //           return; // Exit the function if already logged in 
  //         }
  //           else{
  //             this.updateLoginStatus(admin.id, true).subscribe(() => {
  //               this.setTokens('dummyAccessToken', 'dummyRefreshToken');
  //               sessionStorage.setItem(this.storageKey, JSON.stringify({ name: credentials.name }));
  //               this.router.navigate(['admin-components']);
  //             });


            
  //         }
  //       } else {
  //         alert('Login failed');
  //       }
  //     }),
  //     catchError((error: HttpErrorResponse) => {
  //       alert('Something went wrong');
  //       return throwError(error);
  //     })
  //   );
  // }

   // logout(): void {
  //   sessionStorage.removeItem(this.storageKey);
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('refreshToken');
  //   this.accessToken.next(null);
  //   this.router.navigate(['login']);
  // }
  // logout(): void {
  //   const currentUser = this.getCurrentUser();
  //   if (currentUser) {
  //     this.http.get<any>(`${this.apiUrl}/admin`).pipe(
  //       tap((res) => {
  //         const admin = res.find((a: any) => a.name === currentUser.name);
  //         if (admin) {
  //           this.updateLoginStatus(admin.id, false).subscribe(() => {
  //             sessionStorage.removeItem(this.storageKey);
              
  //             localStorage.removeItem('accessToken');
  //             localStorage.removeItem('refreshToken');
  //             this.accessToken.next(null);
  //             this.router.navigate(['login']);
  //           });
  //         }
  //       })
  //     ).subscribe();
  //   }
  // }

