const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Hasan Abu-Rayyn',
  authorAddress: 'hasanaburayyan21@gmail.com',
  cdkVersion: '1.116.0',
  defaultReleaseBranch: 'main',
  name: 'my-progen-project',
  repositoryUrl: 'https://github.com/hasanaburayyan/my-progen-project.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
  ],
  devDeps: [
    'aws-sdk',
  ],
  publishToPypi: {
    distName: 'cdk-hasan',
    module: 'cdk_hasan',
    twinePasswordSecret: 'TWINE_USERNAME',
    twineUsernameSecret: 'TWINE_PASSWORD',
  },
  // publishToMaven: {
  //   mavenGroupId: 'com.github.hasanaburayyan',
  //   mavenArtifactId: 'cdkcustom',
  //   javaPackage: 'com.github.hasanaburayyan.custom',
  // },
  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();