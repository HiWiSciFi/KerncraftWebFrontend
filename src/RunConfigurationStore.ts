class RunConfiguration {
	public kernel : string = "";
	public machine : string = "";
	public performanceModel : string = "";
	public cachePredictor : string = "";
	public cores : number = 1;
	public varNames : string[] = ["N"];
	public varValues : number[] = [1];
	public unit : string = "";

	public constructor(init? : Partial<RunConfiguration>) {
		Object.assign(this, init);
	}
}

export default RunConfiguration;
export const runConfiguration : RunConfiguration = new RunConfiguration();
