class RunConfiguration {
	public kernel : string = "";
	public machine : string = "SandyBridgeEP_E5-2680";
	public performanceModel : string = "ECM";
	public cachePredictor : string = "LC";
	public cores : number = 1;
	public varNames : string[] = ["N"];
	public varValues : number[] = [10000];
	public unit : string = "cy/CL";

	public constructor(init? : Partial<RunConfiguration>) {
		Object.assign(this, init);
	}
}

export default RunConfiguration;
export const runConfiguration : RunConfiguration = new RunConfiguration();
