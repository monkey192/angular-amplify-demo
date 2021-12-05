import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            withCredentials: true,
            headers: this.addExtraHeaders(req.headers)
        });

        return next.handle(newReq);
    }

    /**
     * Add other param to request header
     * @param headers
     */
    private addExtraHeaders(headers: HttpHeaders): HttpHeaders {

        return headers;
    }
}
