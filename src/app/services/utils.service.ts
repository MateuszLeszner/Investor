import { Injectable } from '@angular/core';
import { Asset } from '../models/asset';
import { AssetsContainer } from '../models/assets-container';
import { Wallet } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public fillWalletData(wallet: Wallet): void {
    wallet.assetsContainers?.forEach(container => {
      this.fillAssetsContainerData(container);
    });

    wallet.assets!.forEach(asset => this.fillAssetData(asset));

    const containersTotalMoneySpent = wallet.assetsContainers!.map(container => container.totalMoneySpent!).reduce((a, b) => (Number(a) + Number(b)), 0);
    wallet.totalMoneySpent = this.getTotalMoneySpent(wallet.assets!) + containersTotalMoneySpent;

    const containersCurrentTotalValue = wallet.assetsContainers!.map(container => container.currentTotalValue!).reduce((a, b) => (Number(a) + Number(b)), 0);
    wallet.currentTotalValue = this.getCurrentTotalValue(wallet.assets!) + containersCurrentTotalValue;

    const containersTotalProfit = wallet.assetsContainers!.map(container => container.totalProfit!).reduce((a, b) => (Number(a) + Number(b)), 0);
    wallet.totalProfit = this.getTotalProfit(wallet.assets!) + containersTotalProfit;

    wallet.totalPercentageProfit = wallet.totalProfit / wallet.totalMoneySpent;

    this.fillWalletRatios(wallet);
  }

  private getTotalMoneySpent(assets: Asset[]): number {
    return assets.map(asset => asset.moneySpent).reduce((a, b) => (Number(a) + Number(b)), 0);
  }

  private getCurrentTotalValue(assets: Asset[]): number {
    return assets.map(asset => asset.currentValuePerUnit * asset.count).reduce((a, b) => (Number(a) + Number(b)), 0);
  }

  private getTotalProfit(assets: Asset[]): number {
    return this.getCurrentTotalValue(assets) - this.getTotalMoneySpent(assets);
  }

  private fillAssetsContainerData(container: AssetsContainer): void {
    container.totalMoneySpent = this.getTotalMoneySpent(container.assets);
    container.currentTotalValue = this.getCurrentTotalValue(container.assets);
    container.totalProfit = this.getTotalProfit(container.assets);
    container.totalPercentageProfit = container.totalProfit / container.totalMoneySpent;

    container.assets.forEach(asset => this.fillAssetData(asset));
  }

  private fillAssetData(asset: Asset): void {
    asset.currentTotalValue = asset.count * asset.currentValuePerUnit;
    asset.profit = asset.currentTotalValue - asset.moneySpent;
    asset.percentageProfit = asset.profit / asset.moneySpent;
  }

  private fillWalletRatios(wallet: Wallet): void {
    wallet.totalWalletRatio = 0;

    wallet.assets.forEach(asset => {
      asset.walletRatio = asset.currentTotalValue! / wallet.currentTotalValue!;
      wallet.totalWalletRatio! += asset.modelRatio;
    });

    wallet.assetsContainers?.forEach(container => {
      this.fillAssetsContainerRatio(container, wallet.currentTotalValue!);
      wallet.totalWalletRatio! += container.modelRatio;
    })
  }

  private fillAssetsContainerRatio(container: AssetsContainer, walletCurrentTotalValue: number): void {
    container.walletRatio = container.currentTotalValue! / walletCurrentTotalValue;

    container.assets.forEach(asset => {
      asset.walletRatio = asset.currentTotalValue! / walletCurrentTotalValue;
      asset.containerRatio = asset.currentTotalValue! / container.currentTotalValue!;
    });
  }
}
