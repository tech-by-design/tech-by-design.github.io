---
title: Technology by Design's Interoperability Policy 
description: Read about our Interoperability Policy and why we chose to be FHIR-native
author: default
pubDate: 2024-10-25T00:00:00.000Z
coverSVG: ../../assets/tech-by-design/techbd-fhir.svg
socialImage: ../../assets/tech-by-design/techbd-fhir.png
categories:
  - policy
tags:
  - reference
---

# Overview

This post outlines Technology by Design's policy to handling data exchange and integration. As an organization we've decided to be **FHIR-native** in this area. Our policy emphasizes using the HL7 FHIR standard to ensure our systems are consistent, interoperable, and compliant. By following established standards, we avoid custom solutions, making it easier to share data and meet regulatory requirements. Documenting and verifying all customizations ensures our solutions are reliable and scalable. Additionally, we focus on robust practices for error handling, security, testing, change management, and governance to maintain a strong, adaptable approach to data integration. 

## Key Policy Statements

### 1. Avoid Bespoke JSON or XML Payloads

Technology by Design, Inc. prohibits the creation of bespoke payloads (JSON, XML, CSV, flat-file, or otherwise) when an existing standard, such as HL7 FHIR, can meet the requirements. Leveraging established standards ensures consistency, scalability, and compatibility with other systems in the healthcare ecosystem, reducing development and maintenance efforts.

### 2. Detailed Documentation for Non-Standard Payloads

If no existing standard is available or is deemed inappropriate for a given use case, the development team proposing a non-standard payload must create a detailed architecture document that includes the following:

 - Standards Research: Clearly document what standards were evaluated.

- Rationale for Not Using a Standard: Provide a detailed explanation of why available standards do not apply or are insufficient.

- Bespoke Payload Requirements: If a bespoke payload (data format like CSV, Excel, JSON, XML) is deemed necessary: 
  - An Implementation Guide (IG) must be provided to ensure that all stakeholders understand how the custom payload is used. 
  - It must include a machine attestable schema document.
    - A machine attestable schema document is a structured blueprint that describes the format and rules of a payload, often using technologies like JSON Schema, Zod, or XSD. 
    - This document allows machines to validate that the payload conforms to expected standards automatically without needing human intervention to do the validation. 
    - By ensuring data integrity, compatibility, and consistency, a machine attestable schema document is crucial for maintaining smooth communication between different systems. It helps developers understand how the payload (data being exchanged) should be structured, and ensures that all systems can correctly interpret and validate the information being exchanged. 

No bespoke payload or schema will be accepted unless accompanied by a schema that allows machine attestation of content and data. This policy ensures that all custom data structures are rigorously defined, verifiable, and compliant with our standards for quality and interoperability.

### 3. FHIR-First Strategy

Technology by Design, Inc. mandates a FHIR-first strategy for all data exchange, integration, and healthcare-related use cases. HL7 FHIR should be prioritized above all other standards, ensuring that we take advantage of its flexibility, extensibility, and community support. The FHIR-first approach aligns our systems with emerging industry standards and facilitates smoother interoperability with other FHIR-compliant systems.

### 4. FHIR Version 4 or Above

All FHIR content must use FHIR version 4 (v4) or above. Versions prior to 4.x (such as FHIR 3.x and below) are not acceptable without explicit written exception approval. This policy ensures we utilize the latest advancements in FHIR and maintain compatibility with the broader healthcare ecosystem.

### 5. Use FHIR-Native Resources Without Custom Extensions

Wherever possible, FHIR-native resources should be used without resorting to custom extensions. Custom extensions introduce additional complexity and can hinder interoperability. If a custom extension is absolutely required, it must be:

- Machine Validatable: The custom extension must be defined in a way that allows for automated validation.

- Machine Attestable: The custom extension must be defined using FHIR Implementation Guide (IG) StructureDefinition resources to ensure it can be attested by machines for compliance.

### 6. Implementation Guides and StructureDefinitions

All FHIR resources and customizations must be accompanied by FHIR Implementation Guides (IGs). These guides must include StructureDefinition resources that are machine attestable and machine validatable. This policy ensures all data definitions are clear, consistent, and easily verifiable by both developers and automated systems. The use of IGs helps establish clear expectations, simplifies integration, and facilitates ongoing compliance with our FHIR-first strategy.

### 7. Error Handling and Data Validation Requirements

Technology by Design, Inc. requires standardized error handling for all FHIR-based data exchanges. This includes utilizing OperationOutcome resources in FHIR to report errors and maintain consistency across systems. Additionally, automated data validation must be performed at all stages of data exchange to ensure compliance with the defined schemas and catch issues early in the process.

### 8. Security and Privacy Considerations

- Access Control and Security: All FHIR data must be secured using industry-standard protocols, such as OAuth 2.0 and SMART on FHIR, to ensure secure access and patient-directed data sharing.

- Encryption: Data must be encrypted both in transit and at rest, with mTLS used for secure communication between systems.

- Auditing and Logging: All interactions involving FHIR resources must be logged for auditing purposes, ensuring traceability and accountability for access and modifications.

### 9. Testing and Validation Requirements

- Conformance Testing: All FHIR implementations must undergo conformance testing using tools like Inferno to ensure compliance with FHIR standards and Implementation Guides.

- Continuous Validation: FHIR implementations must be continuously validated against evolving standards to maintain compliance and interoperability.

### 10. Change Management and Versioning

- Change Management: Any changes to FHIR resources must follow a defined change management process, including impact analysis and documentation of changes.

- Versioning: FHIR resources must be versioned appropriately, with clear guidelines for handling version upgrades and maintaining backward compatibility.

### 11. Interoperability Assurance

- Interoperability Testing: All custom FHIR profiles or extensions must be tested for interoperability with external systems to ensure compatibility.

- FHIR Connectathons: Participation in FHIR Connectathons and other industry-led events is encouraged to validate solutions in real-world scenarios and improve interoperability.

### 12. Performance and Scalability Considerations

- Performance Benchmarks: All FHIR resource handling must meet defined performance benchmarks to ensure that systems can handle expected transaction volumes efficiently.

- Scalability: FHIR APIs must be designed to be scalable to accommodate growing data volumes and increased interactions.

### 13. Governance and Oversight

- Governance Model: A governance model must be established to oversee FHIR resource usage, including approving changes and ensuring compliance with this policy.

- Periodic Review: The policy must be periodically reviewed to ensure it remains relevant and aligns with current industry standards.

### 14. Education and Training

- Training Requirements: Team members must undergo training on FHIR, including workshops, certifications, or other educational resources to ensure consistent understanding and application of FHIR standards.

- Knowledge Sharing: Internal knowledge-sharing sessions should be conducted to keep teams updated on the latest developments in FHIR and related standards.

### Additional Considerations

#### 1. Data Provenance Requirements

Consider establishing data provenance guidelines to ensure the lineage of data is tracked. This is crucial for compliance, auditing, and establishing trust in data integrity. FHIR's Provenance resource can be used to record all data transformations and interactions.

#### 2. API Rate Limiting and Throttling

It is recommended to implement API rate limiting and throttling to prevent abuse of the FHIR APIs and ensure fair usage. Define appropriate thresholds for requests to maintain system performance under high demand.

#### 3. API Versioning Strategy

Consider expanding on API versioning practices to define how different versions of the API will coexist and how clients will be migrated from older versions to newer ones smoothly. This helps avoid service disruptions during updates.

#### 4. Disaster Recovery and Business Continuity

Consider developing a disaster recovery and business continuity plan for systems using FHIR APIs. This should include procedures for backup, restore, failover, and operational continuity to ensure resilience.

#### 5. Third-Party Integrations

Consider establishing policies for third-party integrations that access or modify FHIR data. Any third-party integration should conform to FHIR standards, including security, privacy, and validation requirements.

#### 6. Identity Management and Consent Handling

Consider defining requirements for identity management and patient consent handling. The FHIR Consent resource should be used to ensure that patient preferences are consistently captured and respected.

#### 7. Data Retention and Deletion Policies

Consider outlining data retention and deletion policies for FHIR resources. Specify the retention duration, archiving criteria, and secure deletion mechanisms to align with regulatory and business requirements.

#### 8. Compliance with Local and International Standards

Consider ensuring compliance with local regulations such as HIPAA and international standards like GDPR. Outline how FHIR data management aligns with applicable privacy and security regulations.

#### 9. Metrics and Monitoring

Consider establishing metrics collection and system monitoring for FHIR APIs. Define key performance indicators (KPIs) such as response times, error rates, and usage statistics to maintain optimal performance and detect issues early.

#### 10. Role-Based Access Control (RBAC)

Consider implementing Role-Based Access Control (RBAC) for FHIR APIs to ensure that only authorized personnel can perform specific actions on resources, minimizing the risk of unauthorized access.

#### 11. Community Contributions and Feedback Loop

Consider encouraging participation in the FHIR community to contribute improvements and feedback. Establish a feedback loop to adapt internal practices based on new developments in the HL7 FHIR community.