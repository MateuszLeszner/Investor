import { Pipe, PipeTransform } from "@angular/core";
import { Asset } from "../models/asset";

@Pipe({
    name: 'assetPercentageInWallet'
})
export class AssetPercentageInWalletPipe implements PipeTransform {
    transform(asset: Asset, walletCurrentTotalValue?: number) {
        return walletCurrentTotalValue ? Asset.getCurrentTotalValue(asset) / walletCurrentTotalValue : '';
    }
}
