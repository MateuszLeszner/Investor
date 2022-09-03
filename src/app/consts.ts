import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Consts {
    public currencies = [
        { symbol: 'PLN', name: 'PLN [zł]'},
        { symbol: 'USD', name: 'USD [$]'},
        { symbol: 'EUR', name: 'EUR [€]'},
        { symbol: 'GBP', name: 'GBP [£]'}
    ];
}
