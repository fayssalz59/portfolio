+++
title = "TikTok Recipe Intelligence / Tastagram"
draft = false
date = 2026-05-11
description = "End-to-end data engineering platform and live Tastagram app for social recipe intelligence."
summary = "A full data platform that turns messy TikTok recipe content into structured Snowflake data, curated analytics, API endpoints, and the live Tastagram experience."
featured = true
home = true
weight = 1
project_type = "Data platform + live app"
github = "https://github.com/fayssalz59/social-recipe-intelligence"
demo = "https://tastagram.fayssal-zeggar.com"
tastagram = "https://tastagram.fayssal-zeggar.com"
technical = "/projects/recipe-data-platform-technical/"
problem = "Social recipe content is messy, multilingual, incomplete, and hard to query without enrichment and lineage."
solution = "I built ingestion, evidence recovery, LLM enrichment, Snowflake Bronze/Silver/Gold models, orchestration, analytics, API serving, Streamlit exploration, and Tastagram."
result = "The project is a complete portfolio-grade data platform with a live public recipe discovery surface."
tech = ["Python", "Snowflake", "SQL", "Kafka", "Airflow", "dbt", "Spark", "FastAPI", "Streamlit", "Docker", "OpenRouter LLM", "Tastagram"]
architecture_title = "From social video evidence to a live recipe product."
architecture_summary = "The platform keeps source evidence, enrichment, trusted warehouse models, analytics, and user-facing delivery separated."
architecture = ["TikTok / CSV seed", "Kafka or batch ingestion", "Snowflake Bronze", "Evidence recovery + LLM Silver", "dbt and Spark Gold", "FastAPI / Streamlit / Tastagram"]
skills = [
  { name = "Data ingestion and orchestration", detail = "CSV loading, TikTok creator monitoring, Kafka event flow, Airflow DAGs, Docker Compose services, and repeatable local execution." },
  { name = "Warehouse modeling", detail = "Snowflake Bronze/Silver/Gold schemas, idempotent merges, dbt serving models, and Spark aggregate analytics for downstream consumers." },
  { name = "AI enrichment and data product delivery", detail = "OpenRouter-based recipe extraction, Pydantic validation, confidence scoring, FastAPI endpoints, Streamlit dashboarding, and the Tastagram live site." }
]
+++
# TikTok Recipe Intelligence / Tastagram

## Fast Snapshot

- **Live site:** [tastagram.fayssal-zeggar.com](https://tastagram.fayssal-zeggar.com)
- **GitHub:** [social-recipe-intelligence](https://github.com/fayssalz59/social-recipe-intelligence)
- **Core skills:** Python, Snowflake, SQL, Kafka, Airflow, dbt, Spark, FastAPI, Streamlit, Docker, LLM enrichment
- **Main idea:** transform unreliable social recipe content into trusted data products and a usable public app.

## Project Overview

TikTok Recipe Intelligence is an end-to-end data engineering and analytics platform behind Tastagram. It turns unstructured social media recipe content into structured, queryable, and explorable data, then serves that data through APIs, dashboards, and a public recipe discovery site.

The project starts from TikTok recipe videos, recovered captions, and recipe-like evidence. It ingests raw content into Snowflake, enriches descriptions with an LLM through OpenRouter, models the data through a Bronze/Silver/Gold architecture, computes analytics with PySpark, orchestrates jobs with Airflow, exposes curated records through FastAPI, presents internal analytics in Streamlit, and makes the final product visible through Tastagram.

The goal of this project is not to build a small isolated scraper. The goal is to demonstrate the shape of a modern data platform: ingestion, event streaming, warehouse modeling, semantic enrichment, orchestration, transformation, distributed analytics, API serving, dashboarding, and local reproducibility with Docker.

## What Problem This Project Solves

Recipe content on social platforms is messy. A TikTok caption may contain a dish name, a cuisine style, a language signal, an ingredient, a vegetarian cue, or no useful metadata at all. That information is valuable, but it is not directly available in an analytical format.

This project transforms that unstructured content into structured data that can answer questions such as:

- Which cuisine styles appear most often?
- Which ingredients dominate the recipe catalog?
- How many recipes are vegetarian?
- Which languages are present in the collected content?
- Which LLM model generated each enrichment?
- Which recipes are ready to be served through an API or dashboard?
- Which enriched records need review because of low confidence or unknown values?

## High-Level Architecture

```text
CSV seed data / TikTok creator monitor
        |
        | batch ingestion or Kafka event
        v
Snowflake Bronze
        |
        | OpenRouter LLM enrichment
        v
Snowflake Silver
        |
        +--> dbt Gold serving views --> FastAPI + Streamlit
        |
        +--> PySpark analytics --> Gold analytics tables
        |
        v
Airflow orchestration + Docker Compose local platform
```

## Main Components

The project is intentionally built with multiple realistic data platform components:

- **Kafka** handles event-driven ingestion from the TikTok creator monitor.
- **Snowflake** stores the analytical data warehouse layers.
- **Bronze/Silver/Gold modeling** separates raw data, enriched records, and consumption-ready data.
- **OpenRouter / LLM enrichment** extracts structured recipe attributes from messy captions.
- **dbt** creates curated Gold models for the API and Streamlit dashboard.
- **PySpark** computes batch analytics tables from the Silver layer.
- **Airflow** orchestrates ingestion, enrichment, dbt, and Spark jobs.
- **FastAPI** exposes curated recipe data through clean HTTP endpoints.
- **Streamlit** provides an interactive analytics interface.
- **Docker Compose** runs the platform locally with reproducible services.
- **Portainer** makes the container stack easier to inspect during local development.

## Data Flow

1. **Raw content arrives**

   The project supports two ingestion paths. A CSV seed dataset can be loaded directly into Snowflake Bronze for deterministic local demos. A TikTok creator monitor can also detect new videos, publish events to Kafka, and feed the Bronze table through a Kafka consumer.

2. **Bronze stores raw records**

   The Bronze layer stores source-level recipe records with titles, descriptions, TikTok URLs, source metadata, raw payloads, and record hashes for idempotent loading.

3. **Silver enriches the content**

   The enrichment job reads unprocessed Bronze rows, sends recipe descriptions to OpenRouter, validates the JSON response, and writes structured fields to Silver:

   - recipe language
   - vegetarian flag
   - cuisine style
   - main ingredient
   - processing confidence
   - model name
   - raw LLM response

4. **dbt builds serving views**

   dbt reads Silver and creates Gold views for downstream consumers. The API gets a clean API-oriented catalog. Streamlit gets a dashboard-oriented catalog.

5. **Spark computes analytics**

   PySpark reads the Silver table from Snowflake and writes aggregate analytics tables back to the Gold schema. These tables summarize the catalog by cuisine, ingredient, language, and model.

6. **Products consume Gold**

   FastAPI exposes recipes and filters. Streamlit shows KPIs, charts, recipe cards, Spark analytics, and data quality views.

## What I Built

This project demonstrates work across the full data stack:

- designed a medallion architecture in Snowflake;
- implemented CSV ingestion into Bronze with idempotent merge logic;
- implemented event-driven ingestion with Kafka;
- created a TikTok creator monitor that emits normalized content events;
- integrated OpenRouter for structured LLM enrichment;
- hardened the LLM parser to accept valid JSON objects and single-item lists;
- modeled Gold serving layers with dbt;
- implemented Spark analytics jobs that read and write Snowflake tables;
- orchestrated jobs with Airflow DAGs;
- exposed curated data through FastAPI;
- built an interactive Streamlit analytics dashboard;
- containerized the main services with Docker Compose;
- documented setup, architecture, limitations, and smoke tests.

## Why This Is a Data Engineering Project

The strongest part of this project is the system design. Each component has a clear role:

- ingestion is separated from enrichment;
- raw data is preserved before transformation;
- LLM output is validated before entering Silver;
- dbt handles serving models;
- Spark handles heavier analytical aggregation;
- Airflow coordinates batch execution;
- API and dashboard read from curated Gold data, not raw tables;
- Docker makes the local platform reproducible.

That separation makes the project realistic. It is not just a notebook, not just a dashboard, and not just an API. It is a complete pipeline with multiple serving surfaces.

## Public Product Surface

Tastagram is the visible site for the project. It is important because it shows that the pipeline does not stop at warehouse tables. The enriched catalog becomes something a reviewer can actually open, search, and inspect.

The project also keeps internal surfaces for technical validation:

- FastAPI for curated recipe endpoints and filter values;
- Streamlit for KPIs, data quality checks, charts, and recipe cards;
- Snowflake Gold models as the contract between engineering and product surfaces.

## Current Dashboard Capabilities

The Streamlit application now includes:

- global catalog KPIs;
- visible-record KPIs based on active filters;
- filters for language, cuisine, ingredient, model, vegetarian status, confidence, and search text;
- charts for cuisine distribution, language distribution, ingredient frequency, and LLM model usage;
- recipe cards with TikTok links and enrichment metadata;
- full tabular exploration;
- optional Spark analytics visualizations when aggregate tables exist;
- data quality views for unknown values, missing values, and low-confidence enrichments;
- warehouse layer counts for Bronze, Silver, and Gold when available.

## Portfolio Value

This project is designed to be discussed in a technical interview. It shows that I can:

- build a multi-service data platform;
- reason about data modeling layers;
- integrate APIs and LLMs into batch pipelines;
- use Kafka for event-driven ingestion;
- use Snowflake as a central analytical warehouse;
- use dbt and Spark for different transformation needs;
- use Airflow for orchestration;
- expose data through both API and dashboard layers;
- package the system locally with Docker;
- identify and fix operational issues in a real repository.

## Quick Review Links

- [Tastagram live site](https://tastagram.fayssal-zeggar.com)
- [GitHub repository](https://github.com/fayssalz59/social-recipe-intelligence)
- [Technical deep dive](/projects/recipe-data-platform-technical/)

## Technical Proof Snippets

These examples are intentionally short. The goal is to make the implementation concrete without forcing a reviewer to read the entire repository first.

### Warehouse merge pattern

```sql
merge into bronze.bronze_tiktok_recipes as target
using staged_records as source
on target.record_hash = source.record_hash
when not matched then insert (...)
values (...);
```

### Orchestration shape

```python
ingest_to_bronze >> enrich_to_silver >> run_dbt_gold_models
enrich_to_silver >> run_spark_analytics
```

### Enrichment validation principle

```python
payload = normalize_llm_enrichment(raw_response)
validated = RecipeEnrichment.model_validate(payload)
```

## Known Tradeoffs

The project is intentionally portfolio-oriented and local-first. A few choices are pragmatic rather than fully production-grade:

- some services still install dependencies at container startup;
- the Spark job is triggered through a long-lived container using `docker exec`;
- TikTok scraping is inherently fragile because sessions, tokens, bot detection, and browser behavior can change;
- Snowflake credentials and OpenRouter keys must be supplied by the user through environment variables;
- the local Docker Compose setup is designed for demonstration, not high availability.

These tradeoffs are documented because they are part of the engineering story. The project is not pretending to be a production platform; it is showing how a production-shaped platform can be built, tested, and improved.

## Next Improvements

The next improvements are clear and realistic:

- create custom Docker images for Airflow, API, Streamlit, and Spark;
- add dbt tests for uniqueness, freshness, and accepted values;
- add unit tests for LLM parsing and Kafka event normalization;
- add a deterministic demo mode that does not depend on live TikTok scraping;
- add more Streamlit analytics from the Spark Gold tables;
- improve CI/CD readiness with linting and smoke tests;
- generalize the source model for Instagram Reels and YouTube Shorts.

## Final Result

TikTok Recipe Intelligence is a complete, explainable, and extensible data engineering portfolio project. It demonstrates how raw social media content can be transformed into structured analytics and served through modern data products.

The project is strong because it combines realistic architecture with practical implementation: Snowflake, Kafka, Airflow, dbt, Spark, LLM enrichment, FastAPI, Streamlit, and Docker all work together toward one clear use case.


## Technical steps
For a deeper engineering breakdown, read the [technical deep dive](/projects/recipe-data-platform-technical/).
