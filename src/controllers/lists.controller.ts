import { BigQuery } from "@google-cloud/bigquery";
import { Request, Response } from "express";
import BigQueryClient from "../config/bigquery-client";
import BigQueryHelpers from "../shared/bigquery-helpers";
import { replaceDashWithUnderscore } from "../shared/handling-strings";

export interface ListBodyDto {
	tenantId: string;
}

export default class ListsController {
	private readonly bigQueryclient: BigQuery;
	constructor() {
		this.bigQueryclient = BigQueryClient.getInstance();
		this.get = this.get.bind(this);
		this.getById = this.getById.bind(this);
	}

	public async get(req: Request, res: Response): Promise<Response> {
		const body = req.body as ListBodyDto;
    const datasetId = replaceDashWithUnderscore(body.tenantId);
		const dataSet = await BigQueryHelpers.getDatasetInstance(
			datasetId,
			this.bigQueryclient
		);

    const query = `SELECT * FROM Activities LIMIT 100`;
    const options = {
      query,
      location: 'US',
    };

    const [job] = await dataSet.createQueryJob(options);
    const [rows] = await job.getQueryResults();

		return res.status(200).json(rows);
	}

  public async getById(req: Request, res: Response): Promise<Response> {
    const id = req.query.id;
    const body = req.body as ListBodyDto;
    const datasetId = replaceDashWithUnderscore(body.tenantId);
		const dataSet = await BigQueryHelpers.getDatasetInstance(
			datasetId,
			this.bigQueryclient
		);

    const query = `SELECT * FROM Activities WHERE FIELDID = '${id}' LIMIT 1`;
    const options = {
      query,
      location: 'US',
    };


    console.log(query);

    const [job] = await dataSet.createQueryJob(options);
    const [rows] = await job.getQueryResults();
    return res.status(200).json(rows[0]);
  }
}
