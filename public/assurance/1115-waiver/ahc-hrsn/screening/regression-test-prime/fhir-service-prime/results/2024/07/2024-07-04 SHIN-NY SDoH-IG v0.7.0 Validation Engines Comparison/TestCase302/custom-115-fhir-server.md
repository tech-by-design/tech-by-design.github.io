# File evaluation against Custom 1115 FHIR Server

## Files tested

- [TestCase302.json](TestCase302.json)

## NYeC expectations

```json
{
  "testcase": 302,
  "csvoutputS3Bucket": "certification-engine-output",
  "testcasetype": "POSITIVE",
  "expectedResult": "Test Case 302 should succcessfully be processed by the QE and forwarded to NYeC.  The MPI for the patient should be added to the Patient resource."
}
```

## Results

```json
{
    "OperationOutcome": {
      "validationResults": [
        {
          "issues": [
            {
              "location": {
                "line": null,
                "column": null,
                "diagnostics": "ca.uhn.fhir.parser.DataFormatException"
              },
              "message": "HAPI-1821: [element=\"dateTime\"] Invalid attribute value \"2023-10-28 10:07:42.9149210\": Invalid date/time format: \"2023-10-28 10:07:42.9149210\": Expected character 'T' at index 10 but found  ",
              "severity": "FATAL"
            }
          ],
          "initiatedAt": 1720067067.8747163,
          "profileUrl": "https://djq7jdt8kb490.cloudfront.net/1115/StructureDefinition-SHINNYBundleProfile.json",
          "observability": {
            "identity": "org.techbd.orchestrate.fhir.OrchestrationEngine$HapiValidationEngine",
            "name": "HAPI version 7.2.0 (TODO:get from API instead of hard coding) (FHIR version 4.0.1)",
            "initAt": 1720065312.4929638,
            "constructedAt": 1720065312.5307271
          },
          "operationOutcome": null,
          "completedAt": 1720067067.87688,
          "valid": false
        }
      ],
      "device": {
        "deviceId": "127.0.1.1",
        "deviceName": "vinod-OptiPlex"
      },
      "resourceType": "OperationOutcome"
    }
  }

```