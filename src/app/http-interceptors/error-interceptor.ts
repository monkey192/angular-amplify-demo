import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = request.url;
        const req = request.clone();
        return next.handle(req).pipe(
            tap(
                event => {
                },
                error => {
                    switch (error.status) {
                        case 400:

                            break;
                        case 401:

                            break;
                        case 403:

                            break;
                        case 409:
                        case 304:
                            break;
                        default:
                            break;
                    }
                }
            )
        );
    }
}
