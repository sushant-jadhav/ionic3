import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Http import
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { SingleItem } from '../pages/single-item/single-item';
import { BitCoinListPage } from '../pages/bitcoin/bitcoin';

// Service imports
import { ItemApi } from '../services/item-api.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage,
    BitCoinListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage,
    BitCoinListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemApi,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
