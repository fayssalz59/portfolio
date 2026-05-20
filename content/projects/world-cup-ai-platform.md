+++
title = "World Cup AI Platform"
draft = false
date = 2026-05-20
description = "Azure Data and AI platform for football match intelligence using StatsBomb Open Data, Bronze/Silver/Gold datasets, ML baselines, and FastAPI inference."
summary = "An Azure-oriented data and ML platform that ingests StatsBomb Open Data, builds Bronze/Silver/Gold datasets, trains honest match-result baselines, and exposes predictions through FastAPI."
featured = true
home = true
weight = 2
project_type = "Azure data + ML platform"
github = "https://github.com/fayssalz59/world-cup-ai-platform-test"
problem = "Football prediction demos often leak match information or skip the data engineering needed to make features reproducible."
solution = "I built a StatsBomb pipeline with Azure Blob storage, Parquet Bronze/Silver/Gold layers, pre-match rolling features, ML baselines, FastAPI inference, Docker, Terraform, and tests."
result = "The project separates analytics from honest pre-match prediction and gives reviewers a runnable API plus a clear Azure deployment path."
tech = ["Python", "Azure Blob Storage", "Parquet", "Pandas", "scikit-learn", "FastAPI", "Docker", "Terraform", "Pytest", "Ruff", "Black", "mypy"]
architecture_title = "A reproducible football intelligence platform, from raw StatsBomb files to API inference."
architecture_summary = "The project separates raw ingestion, normalized datasets, model-ready feature layers, training, and prediction serving."
architecture = ["StatsBomb Open Data", "Azure Blob Bronze JSON", "Silver Parquet", "Gold analytics and pre-match features", "ML baselines", "FastAPI inference / Docker / Azure"]
skills = [
  { name = "Cloud data engineering", detail = "Azure Blob containers for Bronze, Silver, and Gold data, local and cloud-friendly paths, and Terraform definitions for the target Azure platform." },
  { name = "Feature engineering and ML", detail = "Post-match analytics features, leakage-aware pre-match rolling features with shift(1), Random Forest baselines, and model artifacts served through an API." },
  { name = "Software quality", detail = "FastAPI endpoints, Docker packaging, orchestration command, pytest coverage, linting with Ruff, formatting with Black, and type checks with mypy." }
]
+++

# World Cup AI Platform

## Fast Snapshot

- **GitHub:** [world-cup-ai-platform-test](https://github.com/fayssalz59/world-cup-ai-platform-test)
- **Core skills:** Python, Azure Blob Storage, Parquet, Pandas, scikit-learn, FastAPI, Docker, Terraform, pytest
- **Main idea:** build a football data and AI platform where the data layers, feature logic, model limitations, and API serving path are all explicit.

## Project Overview

World Cup AI Platform is a data engineering and machine learning project for football match intelligence. It ingests StatsBomb Open Data, stores source JSON in a Bronze layer, creates normalized Silver Parquet datasets, builds Gold analytics and pre-match feature tables, trains baseline match-result models, and exposes the honest pre-match model through a FastAPI inference service.

The project is intentionally more than a notebook. It shows the shape of a data and AI platform: ingestion, cloud storage, layered datasets, feature engineering, model training, API serving, Docker packaging, Terraform infrastructure, and automated tests.

## Why This Project Matters

A lot of sports prediction demos accidentally use information from the match they are trying to predict. This project separates two ideas clearly:

- **Post-match analytics:** useful for explaining what happened after the match.
- **Pre-match prediction:** useful for inference because it only uses information known before kickoff.

That distinction makes the project much easier to defend in a technical interview. It shows awareness of data leakage, not only tool usage.

## Data Flow

1. **StatsBomb Open Data ingestion**

   The ingestion layer downloads StatsBomb open football data and stores source-like JSON locally and in Azure Blob Storage.

2. **Bronze layer**

   Bronze keeps raw competition, match, event, lineup, shot, and pass data in a source-preserving format.

3. **Silver layer**

   Silver normalizes the raw JSON into clean Parquet tables for matches, events, shots, passes, and lineups.

4. **Gold analytics layer**

   Gold creates match-level analytics features that are useful for explainability and baseline modeling.

5. **Gold pre-match layer**

   The pre-match layer builds rolling historical team-form features using `shift(1)` so the current match does not leak into the prediction inputs.

6. **ML and API serving**

   Random Forest baselines are trained for both post-match and pre-match classification. The FastAPI service exposes `/health`, `/model/info`, `/predict`, and `/predict/from-teams`.

## What I Built

- Azure Blob storage integration for Bronze, Silver, and Gold containers.
- StatsBomb ingestion client and upload workflow.
- Normalized Silver Parquet datasets for matches, events, shots, passes, and lineups.
- Gold post-match features for analytics and explainability.
- Gold pre-match rolling features for honest prediction.
- Random Forest baseline training for match-result classification.
- FastAPI inference service with model metadata and prediction endpoints.
- Docker packaging for local API serving.
- Terraform definitions for Azure resources including Storage, ACR, Key Vault, Container Apps, and observability.
- Orchestration command to run ingestion, transformations, and model training.
- Unit tests across ingestion, transformations, ML helpers, orchestration, and API behavior.

## Current Metrics

The current README reports two baseline results:

- **Pre-match baseline:** 48 rows, 0.500 accuracy, 0.417 dummy baseline.
- **Post-match baseline:** 306 rows, 0.610 accuracy, 0.442 dummy baseline.

The important engineering point is not that the model is production-ready. The important point is that the project explains which model can be used for prediction and which one is only useful for analytics after a match has happened.

## API Surface

The FastAPI service includes:

- `GET /health`
- `GET /model/info`
- `POST /predict`
- `POST /predict/from-teams`

The demo-friendly endpoint accepts a competition, season, home team, and away team. It reads the latest available pre-match team-form rows, builds the model features, and returns class probabilities for win, draw, and loss.

## Skills Demonstrated

- Data ingestion from a public sports data source.
- Cloud-oriented data lake structure with Azure Blob Storage.
- Bronze/Silver/Gold data modeling using Parquet.
- Feature engineering with explicit leakage prevention.
- Baseline model training and honest metric reporting.
- FastAPI inference design.
- Dockerized service execution.
- Terraform infrastructure planning for Azure deployment.
- Testable Python package structure.
- Quality gates with pytest, Ruff, Black, and mypy.

## Known Tradeoffs

The project is intentionally early-stage and honest about what comes next:

- the dataset should be expanded across more StatsBomb competitions;
- stronger features such as Elo-style team strength and competition indicators would improve the model;
- model monitoring and a registry are not implemented yet;
- the API deployment target is defined, but the next step is Azure Container Apps deployment;
- the model is a baseline, not a claim of production-level predictive performance.

## Next Improvements

- Train on all available StatsBomb competitions.
- Compare Logistic Regression, Random Forest, and gradient boosting baselines.
- Add richer pre-match team strength and form features.
- Deploy the API to Azure Container Apps.
- Add request examples and screenshots for API docs.
- Introduce model registry and monitoring patterns.

## Final Result

World Cup AI Platform is a strong second portfolio project because it complements the recipe platform. The recipe project proves modern data platform architecture with Snowflake, orchestration, LLM enrichment, and live app delivery. The World Cup project proves cloud data lake thinking, reproducible feature engineering, ML baseline discipline, API serving, Terraform planning, and testable Python engineering.
