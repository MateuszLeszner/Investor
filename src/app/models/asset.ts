import { v4 as uuidv4 } from 'uuid';

export class Asset {
    public id?: string;

    public name: string;

    public moneySpent: number = 0;

    public count: number = 1;

    public currentValuePerUnit: number = 0;

    public modelRatio: number = 0;

    public currentTotalValue?: number;
    public profit?: number;
    public percentageProfit?: number;
    public walletRatio?: number;
    public containerRatio?: number;

    constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
    }

    public equals(e1: Asset, e2: Asset): boolean {
        return e1.id == e2.id
    }
}