---
title: Tech by Design Hub
description: Learn about Tech by Design's visibility platform call the Hub
pubDate: 2024-10-14T00:00:00.000Z
coverSVG: ../../assets/tech-by-design/techbd-hub.svg
socialImage: ../../assets/tech-by-design/techbd-hub.png
---

## Background

Technology by Design created the platform we refer to as the Hub in order to offer visibility into processing 1115 waivers. The Hub is a user interface with a main goal of providing a centralized place for observability and tracability of messages sent between parties to and from Technology by Design as part of the 1115 Waiver project. 

## Access

Accessing the Hub user interface requires you to have elevated permissions in the Technology by Design ecosystem. Please request access via [this form](/submit-form/access-request) if you'd like to gain insight into the message exchange taking place as part of the 1115 Waiver project.

## User Interface Endpoints

The Hub user interface has multiple instances so it is important you choose the right one depending on whether you're testing or exchanging messages in a production environment. The links below will take you to each of the appropriate Hub environments.
- [Dev](https://synthetic.hub.devl.techbd.org/)
- [Staging](https://synthetic.hub.stage.techbd.org/)
- [QA](https://phi.hub.qa.techbd.org/)
- [Prd](https://hub.techbd.org/)

## $validate Endpoint

If you're working on technical implementation and looking for the best place to attempt a test of *validation rules*, you can use the following endpoint:
- https://synthetic.fhir.api.stage.techbd.org/Bundle/$validate

*Note*: this endpoint **will not** attempt to store or forward messages. This means messages sent to this endpoint won't be visible inside the Hub. The endpoint's purpose is to test your payloads against the FHIR validator to verify you're meeting the implementation guide rules as expected.

#### Instructions for Use
- Use a `POST` method
- Set a header variable called `X-TechBD-Tenant-ID` to `PARTNER1-TEST`
- Add the JSON payload that you'd like to have validated.

#### Example cURL
The following cURL request should return an operational outcome using an example bundle:

```
curl -s https://raw.githubusercontent.com/tech-by-design/polyglot-prime/main/hub-prime/src/test/resources/org/techbd/ig-examples/Bundle-AHCHRSNQuestionnaireResponseExample.json | \
  curl -s -X POST \
    https://synthetic.fhir.api.stage.techbd.org/Bundle/\$validate \
    -H "X-TechBD-Tenant-ID: PARTNER1-TEST" \
    -H "Content-Type: application/json" \
    --data @-
```

#### Need Help?

If you are with an SCN:
- Please direct questions to your QE contact or technical team.

If you are with a QE:
- Use our [Get Help](/get-help) page for self service resources on the Tech by Design Hub.
- Reach out to the 1115 team at NYeC for general questions or questions outside of Tech by Design's Hub.
