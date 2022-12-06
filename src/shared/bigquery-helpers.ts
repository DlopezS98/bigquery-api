import { BigQuery, Dataset } from "@google-cloud/bigquery";

export default class BigQueryHelpers {
	public static async getDatasetInstance(
		datasetId: string,
		bigQueryClient: BigQuery
	): Promise<Dataset> {
		const [dataset] = (await bigQueryClient
			.dataset(datasetId)
			.get()) as any as [Dataset];
		return dataset;
	}
}
