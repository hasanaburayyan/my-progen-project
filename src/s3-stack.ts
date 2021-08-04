import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class S3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'Super-Cool-Bucket', {
      bucketName: 'hsa29-some-crazy-cool-bucket',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}