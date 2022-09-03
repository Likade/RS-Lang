import { textBookContent } from "./textbook-content";

export class TextBook {
	private container : HTMLElement;

	constructor() {}

	render(): string {
		return textBookContent();
	}
}