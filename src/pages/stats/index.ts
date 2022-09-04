import { statsContent } from "./stats-content";
import { updateUserStatistic,  
	createUserWord, 
	updateUserWord,
 loginUser } from '../../core/components/api/api';

 import { userStatistic, getUserStatistic } from './script';
 import { dataUser  } from "../../core/components/interfaces/interface";

export class Stats {
	private container : HTMLElement;
	private userId: string;

	constructor() {}

	async render() {
		return statsContent(this.userId);
  }

	async loginUser() {
		if(localStorage.getItem('email')!=undefined) {
			this.userId = dataUser.userId;
			loginUser({'email': localStorage.getItem('email'), 'password': localStorage.getItem('password')})
		}
	}
}