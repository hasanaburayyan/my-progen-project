import * as cdk from '@aws-cdk/core';
import { S3Stack } from './s3-stack';

export class MyS3Construct extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    new S3Stack(this, 'some-cool-bucket-stack');
  }
}