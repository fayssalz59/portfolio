---
title: "World Cup AI Platform"
description: "Azure Data and AI platform for football match intelligence using StatsBomb Open Data, Bronze/Silver/Gold datasets, ML baselines, and FastAPI inference."
summary: "An Azure-oriented data and ML platform that ingests StatsBomb Open Data, builds Bronze/Silver/Gold datasets, trains honest match-result baselines, and exposes predictions through FastAPI."
featured: true
weight: 2
projectType: "Azure data + ML platform"
github: "https://github.com/fayssalz59/world-cup-ai-platform-test"
problem: "Football prediction demos often leak match information or skip the data engineering needed to make features reproducible."
solution: "I built a StatsBomb pipeline with Azure Blob storage, Parquet Bronze/Silver/Gold layers, pre-match rolling features, ML baselines, FastAPI inference, Docker, Terraform, and tests."
result: "The project separates analytics from honest pre-match prediction and gives reviewers a runnable API plus a clear Azure deployment path."
tech: ["Python", "Azure Blob Storage", "Parquet", "Pandas", "scikit-learn", "FastAPI", "Docker", "Terraform", "Pytest", "Ruff", "Black", "mypy"]
architectureTitle: "A reproducible football intelligence platform, from raw StatsBomb files to API inference."
architectureSummary: "The project separates raw ingestion, normalized datasets, model-ready feature layers, training, and prediction serving."
architecture: ["StatsBomb Open Data", "Azure Blob Bronze JSON", "Silver Parquet", "Gold analytics and pre-match features", "ML baselines", "FastAPI inference / Docker / Azure"]
skills:
  - name: "Cloud data engineering"
    detail: "Azure Blob containers for Bronze, Silver, and Gold data, local and cloud-friendly paths, and Terraform definitions for the target Azure platform."
  - name: "Feature engineering and ML"
    detail: "Post-match analytics features, leakage-aware pre-match rolling features with shift(1), Random Forest baselines, and model artifacts served through an API."
  - name: "Software quality"
    detail: "FastAPI endpoints, Docker packaging, orchestration command, pytest coverage, linting with Ruff, formatting with Black, and type checks with mypy."
links:
  - label: "GitHub"
    href: "https://github.com/fayssalz59/world-cup-ai-platform-test"
---

## Project Overview

World Cup AI Platform is a data engineering and machine learning project for football match intelligence. It ingests StatsBomb Open Data, stores source JSON in a Bronze layer, creates normalized Silver Parquet datasets, builds Gold analytics and pre-match feature tables, trains baseline match-result models, and exposes the honest pre-match model through a FastAPI inference service.

The project is intentionally more than a notebook. It shows the shape of a data and AI platform: ingestion, cloud storage, layered datasets, feature engineering, model training, API serving, Docker packaging, Terraform infrastructure, and automated tests.

## Why This Project Matters

A lot of sports prediction demos accidentally use information from the match they are trying to predict. This project separates post-match analytics from pre-match prediction, which makes the project easier to defend in a technical interview.

## What I Built

- Azure Blob storage integration for Bronze, Silver, and Gold containers.
- StatsBomb ingestion client and upload workflow.
- Normalized Silver Parquet datasets for matches, events, shots, passes, and lineups.
- Gold post-match features for analytics and explainability.
- Gold pre-match rolling features for honest prediction.
- Random Forest baseline training for match-result classification.
- FastAPI inference service with model metadata and prediction endpoints.
- Docker packaging for local API serving.
- Terraform definitions for Azure resources.
- Unit tests across ingestion, transformations, ML helpers, orchestration, and API behavior.

## Current Metrics

The current README reports a pre-match baseline with 48 rows and 0.500 accuracy against a 0.417 dummy baseline, plus a post-match baseline with 306 rows and 0.610 accuracy against a 0.442 dummy baseline. The important engineering point is that the project explains which model can be used for prediction and which one is only useful for analytics after a match has happened.
