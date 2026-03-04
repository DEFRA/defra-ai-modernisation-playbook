---
title: Application Analysis
permalink: /pages/output-reference/application-analysis/
---

## What this artefact is

A comprehensive analysis of the legacy application source code, extracting everything a developer needs to understand the system's architecture, business logic, integrations, and data model.

## How it's produced

The application analysis is produced by the `application-developer` agent, which reads the entire application codebase — every source file, configuration file, and project file — to build a complete technical picture of the system.

## What it contains

The application analysis has nine mandatory sections:

### 1. Application Overview

High-level summary covering:
- Purpose of the application
- Technology stack (language, framework, runtime)
- Solution structure (projects, layers, key folders)
- Dependencies (NuGet packages, third-party libraries)
- Configuration (connection strings, app settings, feature flags)

### 2. User Roles and Access Control

- Roles table listing each role and its permissions
- Authentication mechanism (e.g. Windows Authentication, forms-based)
- Authorisation approach (role-based, claims-based, custom)

### 3. Features and Capabilities

Named subsections per feature, describing what the feature does from a technical perspective and which source files implement it.

### 4. Workflows and Behaviours

Named subsections per workflow, documenting the sequence of operations the application performs for key business processes.

### 5. Business Rules and Validation

A numbered table (BR-xxx format) of business rules extracted from the code, each with:
- Description of the rule
- Where it is enforced (source file and method)
- Criticality (high, medium, low)

### 6. Domain Model

Entity subsections with:
- Property tables (name, type, constraints)
- Enumerations and their values
- Relationships between entities

### 7. Integration Points

Documentation of all external touchpoints:
- Web services and APIs consumed or exposed
- File I/O (imports, exports, file shares)
- Email notifications
- External systems and their connection details

### 8. Reports

Each report documented with:
- Type (e.g. Crystal Reports, SSRS, custom)
- Purpose
- Data sources
- Parameters
- Output format

### 9. Cross-Reference: Application to Database

Mapping between application concepts and database structures:
- Data access patterns (ORM, stored procedures, inline SQL)
- Entity-to-table mapping
- Stored procedure calls and where they are invoked from

## Quality criteria

- All source files read and accounted for
- Business rules numbered and assigned criticality
- Domain model entities match the codebase
- Integration points documented with connection details
- Cross-reference section links application concepts to database structures

## Example

The following snippet shows a technology stack summary for a fictional sample tracking system.

### Technology Stack

- **Language**: VB.NET
- **Framework**: ASP.NET Web Forms (.NET Framework 4.0)
- **Database**: SQL Server with stored procedure-based data access
- **Architecture**: Three-tier with business logic library and web presentation layer
- **Authentication**: Windows Authentication via the agency's Active Directory
- **Key dependencies**: Crystal Reports 13.0, Microsoft Enterprise Library 5.0

### Business Rules (excerpt)

| Rule | Description | Source | Criticality |
|------|------------|--------|-------------|
| BR-001 | Reference number must be unique across all submissions | `SubmissionService.vb` line 142 | High |
| BR-002 | Date received cannot be a future date | `SubmissionValidator.vb` line 58 | High |
| BR-003 | A submission must contain at least one sample before it can be finalised | `SubmissionService.vb` line 210 | High |
| BR-004 | Only users with the Supervisor role can delete a submission | `SubmissionController.vb` line 87 | Medium |
