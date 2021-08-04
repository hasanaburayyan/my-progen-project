import * as cdk from '@aws-cdk/core';
import '@aws-cdk/assert/jest';
import { S3Stack } from '../src';

test('hello', () => {
  // GIVEN
  let app = new cdk.App();

  // WHEN
  let stack = new S3Stack(app, 'super-cool-stack');

  // THEN
  expect(stack).toHaveResource('AWS::S3::Bucket');
});