--- 
title: Breakdown of Technology by Design Systems 
description: Read about different systems in the Technology by Design ecosystem which users can request access to
author: default
pubDate: 2026-02-26T00:00:00.000Z
coverSVG: ../../assets/tech-by-design/pri-logo_Full-Color.svg
socialImage: ../../assets/tech-by-design/pri-logo_Full-Color.png
categories:
  - fusion
  - 1115
tags:
  - reference
  - fusion
  - 1115
---

# Breakdown of Technology by Design Systems

_Request access here: [Tech by Design Access Request Form](https://techbd.org/submit-form/access-request/)_

## Systems
At a high level, here is a breakdown of the different systems which exist in the Technology by Design ecosystem.
- GitHub
  - This is the code and documentation library
  - There are a few DIFFERENT libraires (e.g. Repositories) which exists under the Tech by Design organization
  - These are broken down between two Tech by Design projects - 1115 and Fusion
  - Repositories:
    - Help Desk:
      - Shared between both projects
      - If issues arise which need attention, issues (e.g. tickets) can be opened here for follow up by the TxD team
    - 1115 Hub:
      - Specific to the 1115 project - this handles HRSN traffic to the state Data Lake
      - Access can be granted to two environments
    - QE BridgeLink repository
      - Specific to the Fusion project
      - These are QE specific repositories created for handling development and code tracking between environments (DEV/QA/PRD) for each QE's BL instance
    - Fusion planning repository
      - This is where requirements and decisions related to the implementation of the Fusion project are documented
  - In order to be provisioned with access to a repository, a user must have gone through the steps of setting up a individual GitHub account. To complete this setup, please visit [this link](https://github.com/signup).
- BridgeLink *
  - Transformation tool that moves data from inbound sources into the database
  - There are various instances/environments which exist under Tech by Design, so when requesting access for this, it is imperative to specify what instance and environment you are requesting access to. For example: RRHIO DEV, etc.
  - There are different environments a user can be provisioned with access to - DEV / QA / PROD
  - A breakdown of available environments can be found [here](https://github.com/tech-by-design/help-desk-non-phi/wiki/Nexus#bridgelink-environments).
- Enlighten
  - Enlighten is TxD's tool for monitoring channels once they are live
  - Anyone who needs to manage/monitor channels would need access
- InterSystems: Management Portal
  - This is essentially the backend of HealthShare and is limited to **technical resources only**
  - This is where resoucres will have to access to look at message error logs, manage clinicians, manage patient cohorts and subscriptions for alerts, etc. 
  - There are different environments a user can be provisioned with access to - BASE / LIVE (which includes UAT and PRD)
  - _This setup is more involved and will require additional documentation and sign off_
- InterSystems: iService Portal
  - This is the HealthShare support portal
  - **Only TxD employees** and our contractors need access to that
  - This is where TxD log tickets with InterSystems when the QEs notify us of HealthShare issues that need to be addressed
- Fusion Gateway User Portal
  - Fusion Gateway is the Identity Platform used for the Fusion product
  - This is where most users will be provisioned with access to access the main offerings in Fusion (including the Clinical Viewer) 
  - There are different environments a user can be provisioned with access to - DEV / QA / PROD
  - It provides SSO access to the following systems:
    - InterSystems HealthShare
      - e.g. Clinical Viewer
      - This is role / consent moderated
    - BridgeLink SSO access *
    - MaxMD: User Portal
      - HISP - secure mail
      - This is for access to actual mail boxes where users will be logging in to review mail sent to them
      - There are two different environments a user can be provisioned with access to - EVAL / LIVE
    - MaxMD: Admin Portal
      - This is limited to users who will be managing user setup and maintenance
      - This setup is more involved and will require additional involvement from MaxMD
      - There are two different environments a user can be provisioned with access to - EVAL / LIVE
    - MaxMD: Provisioning Tool
      - This is the where users will be managing user setup and maintenance, and is limited to users who's job role requires them to have this access
      - This setup is more involved and will require additional involvement from MaxMD
      - There are two different environments a user can be provisioned with access to - EVAL / LIVE
- Fusion Gateway Admin Portal
  - This is where the setup and management of users and their application registrations (e.g. badges) occurs
  - There are different environments a user can be provisioned with access to - DEV / QA / PROD
- Verato Support Portal
  - This is where support issues which need to be escalated to Verato get opened
- Verato: UI
  - This is where QE staff will go to review / manage patient queues
  - There are different environments a user can be provisioned with access to - Dev / TEST / PROD
- Nexus Data Store
  - This is where the raw and transformed messages inbound to Fusion are stored for QEs to access as needed


 
