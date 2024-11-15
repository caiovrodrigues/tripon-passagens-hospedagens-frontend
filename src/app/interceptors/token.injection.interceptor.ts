import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { UserDataClientService } from "../services/user-data-client.service";

export class TokenInjection implements HttpInterceptor{

    private userData = inject(UserDataClientService);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.userData.getToken();
        if(token){
            req = req.clone({
                headers: req.headers.set("Authorization", token)
            });
        }
        
        return next.handle(req);
    }

}