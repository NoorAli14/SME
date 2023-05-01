import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

export const Interceptor: HttpInterceptorFn = (req, next) => {
//   let pendingCalls: number = 0;

//   req = req.clone({
//     setHeaders: {
//       'Content-Type': 'application/json; charset=utf-8',
//       'x-channel-id': environment.channelId,
//       'x-tenant-id': environment.tenantId,
//       ...(token && { 'x-access-token': token }),
//     },
//   });

//   !pendingCalls && _sharedService.showLoader();
//   pendingCalls++;

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
    //   if (err.status === 401 && _sharedService.isAuthenticated()) {
    //     _dataService.corporateDetails = null;
    //     _modalService.dismissAll();
    //     _sharedService.logoutUser();
    //   } else if (err.status == 500) {
    //     _sharedService.showToast({
    //       classname: 'error',
    //       text: 'Internal server error',
    //     });
    //   }
      return throwError(() => err);
    }),
    finalize(() => {
    //   pendingCalls--;
    //   if (!pendingCalls) {
    //     _sharedService.hideLoader();
    //   }
    })
  );
};
