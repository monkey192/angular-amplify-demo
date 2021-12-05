import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './error-interceptor';
import { CustomInterceptor } from './custom-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
];
