import { v4 as uuidv4 } from 'uuid';
import { Asset } from "./asset";

export class AssetsContainer {
    public id?: string;

    public name?: string;

    public assets: Asset[] = [];

    public modelRatio: number = 0;

    public totalMoneySpent?: number;
    public currentTotalValue?: number;
    public totalProfit?: number;
    public totalPercentageProfit?: number;
    public walletRatio?: number;

    public isCollapsed: boolean = false;

    constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
    }

    public equals(e1: AssetsContainer, e2: AssetsContainer): boolean {
        return e1.id == e2.id
    }
}
