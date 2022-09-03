import { Pipe, PipeTransform } from "@angular/core";
import { Asset } from "../models/asset";


@Pipe({ name: 'assetProfitPipe', pure: false })
export class AssetProfitPipe implements PipeTransform {
  transform(asset: Asset, percentage: boolean = false): number {
    return percentage ? Asset.getPercentageProfit(asset) : Asset.getProfit(asset);
  }
}
