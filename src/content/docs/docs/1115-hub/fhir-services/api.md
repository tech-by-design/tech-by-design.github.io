---
title: API Endpoints
---

### Production

- **[Tech by Design Hub Prod](https://hub.techbd.org/)** (for QE use): The production instance of TechBD Hub, where production PHI data should be exchanged.
  - FHIR API endpoints (mTLS enabled)
    - https://fhir.api.techbd.org/Bundle
    - https://fhir.api.techbd.org/Bundle/$validate
  - Flat file (CSV) API endpoints (mTLS enabled)
    - https://fhir.api.techbd.org/flatfile/csv/Bundle
    - https://fhir.api.techbd.org/flatfile/csv/Bundle/$validate
  - CCDA API endpoints (In development)
    - https://fhir.api.techbd.org/ccda/Bundle (TBD)
    - https://fhir.api.techbd.org/ccda/Bundle/$validate (TBD)
  - Hub self-service UI endpoint (will not have mTLS by design)
    - https://hub.techbd.org/
  - SFTP Server
    - sftp.techbd.org
    - Please open a [Help Desk Issue](https://github.com/tech-by-design/help-desk-non-phi/issues) to get credentials for SFTP.
  - Infrastructure Health Status UI endpoint
    - https://status.techbd.org/

### QA

- **[Tech by Design Hub PHI-capable QA](https://phi.hub.qa.techbd.org/)** (for QE use): The Quality Assurance (QA) instance of TechBD Hub where only synthetic data should be exchanged but may be used for testing PHI if prior approval by NYeC in granted, in writing. The QA environment will be regularly dropped and recreated so there are no long-term data guarantees.
  - FHIR API endpoints (mTLS enabled)
    - https://phi.fhir.api.qa.techbd.org/Bundle
    - https://phi.fhir.api.qa.techbd.org/Bundle/$validate
  - FHIR API endpoints (For testing purpose, mTLS is is not enabled for these endpoints)
    - https://no-cert-phi.fhir.api.qa.techbd.org/Bundle
    - https://no-cert-phi.fhir.api.qa.techbd.org/Bundle/$validate
  - Flat file (CSV) API endpoints (mTLS enabled)
    - https://phi.fhir.api.qa.techbd.org/flatfile/csv/Bundle
    - https://phi.fhir.api.qa.techbd.org/flatfile/csv/Bundle/$validate
  - CCDA API endpoints (In development)
    - https://phi.fhir.api.qa.techbd.org/ccda/Bundle
    - https://phi.fhir.api.qa.techbd.org/ccda/Bundle/$validate
  - SFTP Server
    - phi.sftp.qa.techbd.org
  - Hub self-service UI endpoint (will not have mTLS by design)
    - https://phi.hub.qa.techbd.org/
  - Infrastructure Health Status UI endpoint
    - https://status.techbd.org/