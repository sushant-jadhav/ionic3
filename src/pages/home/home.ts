import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
// Import pages to allow links to the page
// import { CategoryPage } from '../../pages/category/category';
import { CategoryPage } from '../../pages/category/category';

// Service import for items
// import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpModule]
})
export class HomePage {
  items: any;
  constructor(public navCtrl: NavController,public params:NavParams) {

  }
  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {
    // this.itemApi.getItems().then(data => this.items = data);
  }

  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  CategoryTapped($event, category) {
    console.log('1');
    this.navCtrl.push(CategoryPage, {
        category: 'Fantasticness'
    });
  }

  CategoryTapped_2($event, category) {
    console.log('2');
    this.navCtrl.push(CategoryPage, {
        category: 'Short'
    });
  }

  CategoryTapped_3($event, category) {
    console.log('3');
    this.navCtrl.push(CategoryPage, {
        category: 'Booperness'
    });
  }



}
