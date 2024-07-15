// // import { inject } from '@angular/core';
// // import { CanActivateFn, Router } from '@angular/router';
// // import { PlacementService } from './placement.service';

// // export const adminAuthGuard: CanActivateFn = (route, state) => {
// //   const router = inject(Router);
// //   const authservice = inject(PlacementService)
// //   let check =localStorage.getItem('token');
// //   if(check=='false'){
// //     alert('unauthrized page')
// //     router.navigate(['admin'])
// //     return true
// //   }
// //   return true
// // };

// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { PlacementService } from './placement.service';  
// import { of } from 'rxjs';
// import { catchError, map, switchMap, tap } from 'rxjs/operators';

// export const adminAuthGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router);
//   const authService = inject(PlacementService);

//   const accessToken = authService.getAccessToken();

//   if (accessToken) {
//     // to check the token's validity before allowing access
//     return of(true);
//   } else {
//     // Refresh token logic
//     return authService.refreshToken().pipe(
//       map(() => true),
//       catchError(() => {
//         router.navigate(['login']);
//         return of(false);
//       })
//     );
//   }
// };

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PlacementService } from './placement.service';  
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(PlacementService);

  const accessToken = authService.getAccessToken();

  
  if (accessToken) {
    
    // to check the token's validity before allowing access and a user already logged in or not
    return of(true);
    
  } else {
    router.navigate(['login']);
    return of(false);
  }
};







    // Refresh token logic
    // return authService.refreshToken().pipe(
    //   map(() => true),
    //   catchError(() => {
    //     router.navigate(['login']);
    //     return of(false);
    //   })
    // );
  

