import { Observable } from "dexie";
import { Asset } from "./asset";
import { DbEntity } from "./db-entity";

export class Wallet extends DbEntity {
    public assets?: Observable<Asset[]>;

    public currency: string = 'PLN';

    public totalMoneySpent?: number;
    public currentTotalValue?: number;
    public totalProfit?: number;
    public totalPercentageProfit?: number;

    constructor(name: string) {
        super();
        this.name = name;
    }
}
