---
title: API Endpoints
---

### Production ###
- **[Tech by Design Hub Prod](https://phi.hub.techbd.org/)** (for QE use): The production instance of TechBD Hub, where production PHI data should be exchanged.
  
  - FHIR API endpoints (mTLS enabled)
    - https://fhir.api.techbd.org/Bundle
    - https://fhir.api.techbd.org/Bundle/$validate
  - Flat file (CSV) API endpoints (mTLS enabled)
    - https://fhir.api.techbd.org/flatfile/csv/Bundle (should be available on 01-01-2025)
    - https://fhir.api.techbd.org/flatfile/csv/Bundle/$validate (should be available on 01-01-2025)
  - CCDA API endpoints (In development)
    - https://fhir.api.techbd.org/ccda/Bundle (should be available on 01-01-2025)
    - https://fhir.api.techbd.org/ccda/Bundle/$validate (should be available on 01-01-2025)
  - Hub self-service UI endpoint (will not have mTLS by design)
    - https://hub.techbd.org/
  - Infrastructure Health Status UI endpoint
    - https://status.techbd.org/

### QA ###
- **[Tech by Design Hub PHI-capable QA](https://phi.hub.qa.techbd.org/)** (for QE use): The Quality Assurance (QA) instance of TechBD Hub where only synthetic data should be exchanged but may be used for testing PHI if prior approval by NYeC in granted, in writing. The QA environment will be regularly dropped and recreated so there are no long-term data guarantees.
  
  - FHIR API endpoints (mTLS enabled)
    - https://phi.fhir.api.qa.techbd.org/Bundle
    - https://phi.fhir.api.qa.techbd.org/Bundle/$validate
  - FHIR API endpoints (For testing purpose, mTLS is is not enabled for these endpoints)
    - https://no-cert-phi.fhir.api.qa.techbd.org/Bundle
    - https://no-cert-phi.fhir.api.qa.techbd.org/Bundle/$validate
  - Flat file (CSV) API endpoints (mTLS enabled)
    - https://phi.fhir.api.qa.techbd.org/flatfile/csv/Bundle (should be available on 12-23-2024)
    - https://phi.fhir.api.qa.techbd.org/flatfile/csv/Bundle/$validate
  - CCDA API endpoints (In development)
    - https://phi.fhir.api.qa.techbd.org/ccda/Bundle (should be available on 12-27-2024)
    - https://phi.fhir.api.qa.techbd.org/ccda/Bundle/$validate (should be available on 12-27-2024)
  - SFTP Server
    - phi.sftp.qa.techbd.org (should be available on 12-23-2024)
  - Hub self-service UI endpoint (will not have mTLS by design)
    - https://phi.hub.qa.techbd.org/
  - Infrastructure Health Status UI endpoint
    - https://status.techbd.org/

### Staging ###
- **[Tech by Design Hub (Synthetic, non-PHI) Staging](https://synthetic.fhir.api.stage.techbd.org/)** (for QE use): The staging instance of TechBD Hub where only synthetic data may be exchanged (more stable and updated on a periodic basis with notifications).
  - FHIR API endpoints
    - https://synthetic.fhir.api.stage.techbd.org/Bundle
    - https://synthetic.fhir.api.stage.techbd.org/Bundle/$validate
  - Flat file (CSV) API endpoints
    - https://synthetic.fhir.api.stage.techbd.org/flatfile/csv/Bundle (should be available on 12-19-2024)
    - https://synthetic.fhir.api.stage.techbd.org/flatfile/csv/Bundle/$validate
  - CCDA API endpoints (In development)
    - https://synthetic.fhir.api.stage.techbd.org/ccda/Bundle (should be available on 12-26-2024)
    - https://synthetic.fhir.api.stage.techbd.org/ccda/Bundle/$validate (should be available on 12-23-2024)
  - SFTP Server
    - synthetic.sftp.stage.techbd.org (should be available on 12-19-2024)
  - Hub self-service UI endpoint
    - https://synthetic.hub.stage.techbd.org/
   
### Development ###
- **[Tech by Design Hub (Synthetic, non-PHI) Development](https://synthetic.fhir.api.devl.techbd.org/)** (for Tech by Design internal and partner use, also may be used by QEs): The development instance of TechBD Hub where only synthetic data may be exchanged (unstable but usually most frequently updated, without notifications)
  - FHIR API endpoints
    - https://synthetic.fhir.api.devl.techbd.org/Bundle
    - https://synthetic.fhir.api.devl.techbd.org/Bundle/$validate
  - Flat file (CSV) API endpoints
    - https://synthetic.fhir.api.devl.techbd.org/flatfile/csv/Bundle
    - https://synthetic.fhir.api.devl.techbd.org/flatfile/csv/Bundle/$validate
  - CCDA API endpoints (In development)
    - https://synthetic.fhir.api.devl.techbd.org/ccda/Bundle/Bundle
    - https://synthetic.fhir.api.devl.techbd.org/ccda/Bundle/Bundle/$validate
  - SFTP Server
    - synthetic.sftp.devl.techbd.org
  - Hub self-service UI endpoint
    - https://synthetic.hub.devl.techbd.org/
  
- **Instructions for Using Swagger API Documentation For API Testing**:
  -	[Instruction Video for Using Swagger API Documentation For API Testing](https://github.com/tech-by-design/docs.techbd.org/tree/main/src/content/docs/1115-hub/fhir-services/support/)

- **FHIR Server Capabilities**: [`https://synthetic.fhir.api.techbd.org/metadata`](https://synthetic.fhir.api.techbd.org/metadata) (returns XML)
- **Authentication**: None at this time, will be defined and deployed soon.
- **Bundle Endpoints**:
  - **Validate Bundle**: `/Bundle/$validate`
  - **Submit Bundle to SHIN-NY Data Lake**: `/Bundle`

Learn more about all of the endpoints by reviewing [TechBD's FHIR API Test Script](/docs.techbd.org/assurance/1115-waiver/ahc-hrsn/screening/regression-test-prime/fhir-service-prime/results/latest/src/fhir-service.test.http) and most recent [TechBD's FHIR API Test Script Results](/docs.techbd.org/1115-hub/fhir-services/regression-test-results/). 

### Architecture

![FHIR Server Architecture](/docs/1115-hub/fhir-services/qcs-fhir-service.drawio.svg)