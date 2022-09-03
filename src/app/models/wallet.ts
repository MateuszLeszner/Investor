import { Asset } from "./asset";
import { DbEntity } from "./db-entity";

export class Wallet extends DbEntity {
    name?: string;

    assets: Asset[] = [];

    currency: string = 'pln';

    constructor(name: string) {
        super();
        this.name = name;
    }

    public static getCurrentTotalValue(wallet: Wallet): number {
        return wallet.assets.map(asset => Asset.getCurrentTotalValue(asset)).reduce((a, b) => a + b);
    }
}
