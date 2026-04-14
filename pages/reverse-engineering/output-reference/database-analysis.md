---
title: Database Analysis
permalink: /pages/reverse-engineering/output-reference/database-analysis/
---

## What this artefact is

A comprehensive analysis of the database layer, extracted from SQL files, stored procedures, and inline SQL found in application code. It documents the complete data architecture of the legacy system.

## How it's produced

The database analysis is produced by the `database-analyst` agent, which reads all SQL scripts, stored procedure definitions, view definitions, and inline SQL statements found within the application codebase.

## What it contains

The database analysis has seven mandatory sections:

### 1. Schema Overview

A subsection per table, each containing:
- Column definitions (name, type, nullability, constraints)
- Indexes (clustered, non-clustered, unique)
- Identification of lookup and reference tables

### 2. Relationships and Constraints

Documentation of all structural constraints:
- Foreign key relationships
- Unique constraints
- Check constraints
- Default values

### 3. Views

A subsection per view, each containing:
- Purpose of the view
- Base tables it draws from
- Source file where the view is defined

### 4. Stored Procedures and Functions

A subsection per procedure or function, each containing:
- Type (stored procedure or function)
- Purpose
- Parameters (name, type, direction)
- An orphaned summary identifying procedures that are defined in the database but never called from the application code

### 5. Triggers

A table of all triggers, each with:
- Table the trigger is attached to
- Event that fires the trigger (INSERT, UPDATE, DELETE)
- Purpose
- Source file

### 6. Database-Level Business Rules

A numbered table (BR-xxx format) of business rules enforced at the database level — constraints, triggers, and stored procedure logic — each with a criticality rating.

### 7. Cross-Reference: Application to Database

Mapping between application code and database structures:
- Stored procedure mapping (which application methods call which procedures)
- Inline SQL statements extracted from application code with their locations

## Quality criteria

- All SQL files and inline SQL accounted for
- Table columns documented with types and constraints
- Stored procedures classified (CRUD, business logic, reporting)
- Orphaned procedures identified
- Business rules numbered and assigned criticality

## Example

The following snippet shows a table definition for a fictional sample tracking system.

### Submissions Table

- **Primary Key**: `SubmissionId` (Guid)
- **Business Key**: `ReferenceNumber` (String) — format FS######-##

| Column | Type | Required | Constraints |
|--------|------|----------|-------------|
| SubmissionId | Guid | Yes | Primary key |
| ReferenceNumber | String | Yes | Unique, format validated |
| DateReceived | DateTime | No | Cannot be future date |
| SenderLab | Guid | No | FK to Laboratory |
| Status | Int | Yes | FK to SubmissionStatus (lookup) |
| CreatedBy | String | Yes | — |
| CreatedDate | DateTime | Yes | Default: GETDATE() |

### Stored Procedure (excerpt)

**`usp_Submission_Search`**
- **Type**: Stored procedure
- **Purpose**: Search submissions by reference number, sample type, and date range
- **Parameters**:

| Parameter | Type | Direction |
|-----------|------|-----------|
| @ReferenceNumber | NVARCHAR(20) | IN |
| @SampleTypeId | INT | IN |
| @DateFrom | DATETIME | IN |
| @DateTo | DATETIME | IN |

- **Called from**: `SubmissionRepository.vb` line 94
