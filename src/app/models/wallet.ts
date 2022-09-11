import { v4 as uuidv4 } from 'uuid';
import { Asset } from "./asset";
import { AssetsContainer } from "./assets-container";

export class Wallet {
    public id?: string;

    public name: string;

    public assets: Asset[] = [];

    public assetsContainers: AssetsContainer[] = [];

    public currency: string = 'PLN';

    public totalMoneySpent?: number;
    public currentTotalValue?: number;
    public totalProfit?: number;
    public totalPercentageProfit?: number;
    public totalWalletRatio?: number;

    constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
    }

    public equals(e1: Wallet, e2: Wallet): boolean {
        return e1.id == e2.id
    }
}
