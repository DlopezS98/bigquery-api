import { BigQuery } from "@google-cloud/bigquery";
// import Environment from "./environment";

export default class BigQueryClient {
	private static instance: BigQuery;

	private constructor() {}

	public static getInstance(): BigQuery {
		if (this.instance) return this.instance;
		// const environment = Environment.getInstance();
		this.instance = new BigQuery({
			keyFilename: `./pes-qa-fb20eff274d0.json`,
			projectId: 'pes-qa',
		});
		return this.instance;
	}
}
