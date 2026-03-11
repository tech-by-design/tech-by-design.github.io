--- 
title: Overview of Technology by Design Systems 
description: Read about different systems in the Technology by Design ecosystem which users can request access to
author: default
pubDate: 2026-02-26T00:00:00.000Z
coverSVG: ../../assets/tech-by-design/pri-logo_Full-Color.svg
socialImage: ../../assets/tech-by-design/pri-logo_Full-Color.png
categories:
  - fusion
  - "1115"
tags:
  - reference
  - fusion
  - "1115"
---

# Overview of Technology by Design Systems

_Request access here: [Tech by Design Access Request Form](https://techbd.org/submit-form/access-request/)_

## Systems
At a high level, here is an overview of the different systems which exist in the Technology by Design ecosystem.
- **<ins>GitHub</ins>**
  - This is the code and documentation library, <ins>but</ins> there are a few DIFFERENT libraires (e.g. Repositories) which exists under the Tech by Design organization
  - These are broken down between two Tech by Design projects - 1115 and Fusion - and are labeled as such on the request form (linked above)
  - Repositories:
    - <ins>Help Desk</ins>:
      - Shared between both projects
      - If issues arise which need attention, issues (e.g. tickets) can be opened here for follow up by the TxD team
      - _QE users who will be logging, managing, or need to be aware of status of Help Desk tickets should request access to this repo_ 
    - <ins>1115 Hub</ins>:
      - Specific to the 1115 project - this handles HRSN traffic to the state Data Lake
      - Access can be granted to two environments
    - <ins>QE BridgeLink repository</ins>:
      - Specific to the Fusion project
      - These are QE specific repositories created for handling development and code tracking between environments (DEV/QA/PRD) for each QE's BL instance
      - _QE Integration engineers, PMs, and project sponsors should request access to this repository for management and tracking of channel development activities_ 
    - <ins>Fusion planning repository</ins>:
      - This is where requirements and decisions related to the implementation of the Fusion project are documented
      - _QE PMs and project sponsors should request access to this repository_
  - In order to be provisioned with access to a repository, a user must have gone through the steps of setting up a individual GitHub account. To complete this setup, please visit [this link](https://github.com/signup).
- **<ins>BridgeLink</ins>** *
  - Transformation tool that moves data from inbound sources into the database
  - There are various instances/environments which exist under Tech by Design, so when requesting access for this, it is imperative to specify what instance and environment you are requesting access to. For example: RRHIO DEV, etc.
  - There are different environments a user can be provisioned with access to - DEV / QA / PROD
    - QA and PROD are connected to HealthShare
    - DEV is not connected to HealthShare
  - _QE integration engineers will need access to the various environments for channel development, validation, and management activities_
    - _**No offshore resources will be given access to QA or PROD**_
  - An overview of available environments can be found [here](https://github.com/tech-by-design/help-desk-non-phi/wiki/Nexus#bridgelink-environments).
- **<ins>Enlighten</ins>**
  - Enlighten is TxD's tool for monitoring channels once they are live
  - _Anyone who needs to manage/monitor channels would need access_
- **<ins>InterSystems: Management Portal</ins>**
  - This is essentially the backend of HealthShare and is limited to **technical resources only**
  - This is where resources will have to access to look at message error logs, manage clinicians, manage patient cohorts and subscriptions for alerts, etc. 
  - There are different environments a user can be provisioned with access to - BASE / LIVE (which includes UAT and PRD)
    - _This setup is more involved and will require additional documentation and sign off_
- **<ins>InterSystems: iService Portal</ins>**
  - This is the HealthShare support portal
  - _**Only TxD employees** and our contractors need access to that_
  - This is where TxD log tickets with InterSystems when the QEs notify us of HealthShare issues that need to be addressed
- **<ins>Fusion Gateway User Portal</ins>**
  - Fusion Gateway is the Identity Platform used for the Fusion product
  - This is where most users will be provisioned with access to access the main offerings in Fusion (including the HealthShare Clinical Viewer) 
  - There are different environments a user can be provisioned with access to - DEV / QA / PROD
    - **Note that Fusion Gateway will only connect to the same comparable environment of another platform**
    - For example: BL QA is connected to Fusion Gateway QA; BL QA cannot be accessed through Fusion Gateway PROD 
  - _QE staff  users will need access to the appropriate Fusion Gateway environment to access the necessary applications connected to that environment via SSO_
  - Fusion Gateway provides SSO access to the following systems:
    - <ins>InterSystems HealthShare</ins>:
      - e.g. Clinical Viewer
      - This is role / consent moderated
      - Users can be provisioned for QA (UAT) / PROD (LIVE)
        - _QE staff users can be given access to HealthShare Clinical Viewer LIVE for issue troubleshooting_
        - _QE Staff users can be given access to HealthShare Clinical Viewer UAT for channel development testing and validation activities_
        - _*Participant users will be given access to this portal by QE staff users when provisioned appropriately, according to QE requirements_
    - <ins>BridgeLink SSO access</ins>*:
      - _Same description as above_
      - _Eventually all access to BL will be via this SSO process and the above will go away_ 
    - <ins>MaxMD, User Portal</ins>:
      - HISP - secure mail
      - This is for access to actual mail boxes where users will be logging in to review mail sent to them
      - There are two different environments a user can be provisioned with access to - EVAL / LIVE
        - _QE staff users can be provisioned with access to EVAL for testing purposes_ 
        - _Participant users and QE staff users with mailboxes will be provisioned with access to LIVE_
    - <ins>MaxMD, Admin Portal</ins>:
      - _This is limited to users who will be managing user setup and maintenance (i.e. T-Users)_
      - There are two different environments a user can be provisioned with access to - EVAL / LIVE
        - This setup is more involved and will require additional involvement from MaxMD
    - <ins>MaxMD, Provisioning Tool</ins>:
      - This is the where users will be managing user setup and maintenance, and is limited to users who's job role requires them to have this access
      - There are two different environments a user can be provisioned with access to - EVAL / LIVE
        - This setup is more involved and will require additional involvement from MaxMD
- **<ins>Fusion Gateway Admin Portal</ins>**
  - This is where the setup and management of users and their application registrations (e.g. badges) occurs
  - There are different environments a user can be provisioned with access to - DEV / QA / PROD
    - _QE users who need to manage QE staff access to QA will need access_ 
    - _QE users who will be managing QE staff and Participant Users will need access to PROD_ 
- **<ins>Verato Support Portal</ins>**
  - This is where support issues which need to be escalated to Verato get opened
  - _Only TxD Help Desk users have access to this portal_
- **<ins>Verato: UI</ins>**
  - This is where QE staff will go to review / manage patient queues
  - There are different environments a user can be provisioned with access to - Dev / TEST / PROD
    - _QE users who will be managing stewardship of MPI tasks will need access_
    - _TEST access is used for testing processes_
    - _PROD is used for managing production tasks on LIVE data_
- **<ins>Nexus Data Store</ins>**
  - This is where the raw and transformed messages inbound to Fusion are stored for QEs to access as needed
  - _Users needing to reprocess messages into BridgeLink will need access_
