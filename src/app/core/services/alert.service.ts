
import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon, SweetAlertPosition, SweetAlertResult } from "sweetalert2";

@Injectable({
    providedIn: 'root'
})
export class AlertService{

    constructor(){
    }

    public makeNotification = (icon: SweetAlertIcon, title: string, text: string): Promise<any> =>
        Swal.fire({
            icon,
            title,
            text,
        })



}
