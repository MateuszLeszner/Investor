import { Pipe, PipeTransform } from "@angular/core";
import { Asset } from "../models/asset";


@Pipe({ name: 'assetCurrentTotalValue', pure: false })
export class AssetCurrentTotalValuePipe implements PipeTransform {
  transform(asset: Asset): number {
    return Asset.getCurrentTotalValue(asset);
  }
}
