import { Pipe, PipeTransform } from "@angular/core";
import { Asset } from "../models/asset";
import { Wallet } from "../models/wallet";

@Pipe({
    name: 'assetPercentageInWallet'
})
export class AssetPercentageInWalletPipe implements PipeTransform {
    transform(asset: Asset, wallet: Wallet) {
        return wallet.currentTotalValue ? Asset.getCurrentTotalValue(asset) / wallet.currentTotalValue : '';
    }
}
