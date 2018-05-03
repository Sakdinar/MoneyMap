import { Dexie } from 'dexie';

export class TransactionAppDB extends Dexie{
	constructor(){
		super("MoneyMapAppDB");

		this.version(1).stores({
			transactions: '++id,amount,lat,lng,title,imageUrl'
		});
	}
}

export interface ICategory{

}

export interface ITransaction{
	id?: number;
	amount: number;
	lat: number;
	lng: number;
	title: string;
	imageUrl: string;
}