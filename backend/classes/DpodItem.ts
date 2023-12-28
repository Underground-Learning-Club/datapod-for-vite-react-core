import { LineBlock } from "./LineBlock";
import * as qstr from '../../share/qtools/qstr';

export class DpodItem {
	private lineBlock: LineBlock;
	private schemaIdCode: string = '';
	private singularSchemaIdCode: string = '';
	private dpodSchema = null;

	constructor(lineBlock: LineBlock) {
		this.lineBlock = lineBlock;
		this.createProperties();
		this.defineDpodSchema();
	}

	private defineDpodSchema() {

	}

	private createProperties() {
		this.singularSchemaIdCode = qstr.chopLeft(this.lineBlock.getFirstLine(), '==').trim();
		this.schemaIdCode = qstr.forcePascalNotation(qstr.forcePlural(this.singularSchemaIdCode));
	}

	public debug() {
		console.log(`=== DpodItem ===`);
		console.log(`schemaIdCode: ${this.schemaIdCode}`);
		console.log(`singularSchemaIdCode: ${this.singularSchemaIdCode}`);
		console.log(``);
	}


}