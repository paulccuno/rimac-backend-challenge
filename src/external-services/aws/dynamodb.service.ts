import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { envConfig } from 'src/infraestructure/config/main.config';

@Injectable()
export class DynamoDBService {
  private dynamoDb: DynamoDB.DocumentClient;
  private tableName: string;

  constructor() {
    this.dynamoDb = new DynamoDB.DocumentClient({
      region: envConfig.AWS_REGION,
      accessKeyId: envConfig.AWS_ACCESS_KEY_ID,
      secretAccessKey: envConfig.AWS_SECRET_ACCESS_KEY,
    });
    this.tableName = envConfig.AWS_DYNAMO_TABLE;
  }

  async putItem(
    item: Record<string, any>,
  ): Promise<DynamoDB.DocumentClient.PutItemOutput> {
    const params = {
      TableName: this.tableName,
      Item: item,
    };
    return this.dynamoDb.put(params).promise();
  }

  async getItem(
    key: Record<string, any>,
  ): Promise<DynamoDB.DocumentClient.GetItemOutput> {
    const params = {
      TableName: this.tableName,
      Key: key,
    };
    return this.dynamoDb.get(params).promise();
  }
}
