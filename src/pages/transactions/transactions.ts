import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transaction } from '../../database';
import { AddingPage } from '../adding/adding';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  title : string = "Movimientos";
  transactions : any;
  addingPage = AddingPage; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewWillEnter(){ // aqui actualiza pantalla 
  // ionViewDidLoad() {  // aqui muestra la pantalla por pirmera vez
    // console.log('ionViewDidLoad TransactionsPage');
    // let transaction = new Transaction(20,"Primera transaccion");
    // transaction.save();

    this.loadTransactions();
  }

  loadTransactions(){
  	Transaction.all()
  			.then((resultados)=>{
  				this.transactions = resultados
  				console.log(this.transactions);
  			});
  }

}
