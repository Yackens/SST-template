// Create an S3 bucket
export const bucket = new sst.aws.Bucket("Uploads");

// Create the DynamoDB table
export const table = new sst.aws.Dynamo("One-Peak", {
    fields: {
      userId: "string",
      tenantId: "string",
    },
    primaryIndex: { hashKey: "userId", rangeKey: "tenantId" },
  });