import { statsContent } from "./stats-content";

export class Stats {
	private container : HTMLElement;

	constructor() {}

	render() {
		return statsContent();
	}
}