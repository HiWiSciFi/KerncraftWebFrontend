class Store {
	public codeWindow : HTMLDivElement = null;
	public codeEditor : HTMLTextAreaElement = null;
	public updateFunc : Function = null;

	public constructor(init? : Partial<Store>) {
		Object.assign(this, init);
	}
}

export default Store;
export const store : Store = new Store();
