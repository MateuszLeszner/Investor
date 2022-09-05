import { DbEntity } from "./db-entity";
import { Wallet } from "./wallet";

export class Asset extends DbEntity {
    public created: number = Date.now();

    public walletId?: string;
    public wallet?: Wallet;

    public moneySpent: number = 0;

    public count: number = 0;

    public currentValuePerUnit: number = 0;

    constructor(name: string, walletId?: string) {
        super();
        this.name = name;
        this.walletId = walletId;
    }

    public static getCurrentTotalValue(asset: Asset): number {
        return asset.currentValuePerUnit * asset.count;
    }

    public static getProfit(asset: Asset): number {
        return Asset.getCurrentTotalValue(asset) - asset.moneySpent;
    }

    public static getPercentageProfit(asset: Asset): number {
        return Asset.getProfit(asset) / asset.moneySpent;
    }
}


