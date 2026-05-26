---
title: "TikTok Recipe Intelligence / Tastagram"
description: "End-to-end data engineering platform and live Tastagram app for social recipe intelligence."
summary: "A full data platform that turns messy TikTok recipe content into structured Snowflake data, curated analytics, API endpoints, and the live Tastagram experience."
featured: true
weight: 1
projectType: "Data platform + live app"
github: "https://github.com/fayssalz59/social-recipe-intelligence"
demo: "https://tastagram.fayssal-zeggar.com"
technical: "/projects/recipe-data-platform-technical/"
problem: "Social recipe content is messy, multilingual, incomplete, and hard to query without enrichment and lineage."
solution: "I built ingestion, evidence recovery, LLM enrichment, Snowflake Bronze/Silver/Gold models, orchestration, analytics, API serving, Streamlit exploration, and Tastagram."
result: "The project is a complete portfolio-grade data platform with a live public recipe discovery surface."
tech: ["Python", "Snowflake", "SQL", "Kafka", "Airflow", "dbt", "Spark", "FastAPI", "Streamlit", "Docker", "OpenRouter LLM", "Tastagram"]
architectureTitle: "From social video evidence to a live recipe product."
architectureSummary: "The platform keeps source evidence, enrichment, trusted warehouse models, analytics, and user-facing delivery separated."
architecture: ["TikTok / CSV seed", "Kafka or batch ingestion", "Snowflake Bronze", "Evidence recovery + LLM Silver", "dbt and Spark Gold", "FastAPI / Streamlit / Tastagram"]
skills:
  - name: "Data ingestion and orchestration"
    detail: "CSV loading, TikTok creator monitoring, Kafka event flow, Airflow DAGs, Docker Compose services, and repeatable local execution."
  - name: "Warehouse modeling"
    detail: "Snowflake Bronze/Silver/Gold schemas, idempotent merges, dbt serving models, and Spark aggregate analytics for downstream consumers."
  - name: "AI enrichment and data product delivery"
    detail: "OpenRouter-based recipe extraction, Pydantic validation, confidence scoring, FastAPI endpoints, Streamlit dashboarding, and the Tastagram live site."
links:
  - label: "Live site"
    href: "https://tastagram.fayssal-zeggar.com"
  - label: "GitHub"
    href: "https://github.com/fayssalz59/social-recipe-intelligence"
  - label: "Technical deep dive"
    href: "/projects/recipe-data-platform-technical/"
---

## Project Overview

TikTok Recipe Intelligence is an end-to-end data engineering and analytics platform behind Tastagram. It turns unstructured social media recipe content into structured, queryable, and explorable data, then serves that data through APIs, dashboards, and a public recipe discovery site.

The project starts from TikTok recipe videos, recovered captions, and recipe-like evidence. It ingests raw content into Snowflake, enriches descriptions with an LLM through OpenRouter, models the data through a Bronze/Silver/Gold architecture, computes analytics with PySpark, orchestrates jobs with Airflow, exposes curated records through FastAPI, presents internal analytics in Streamlit, and makes the final product visible through Tastagram.

## What I Built

- Designed a medallion architecture in Snowflake.
- Implemented CSV ingestion into Bronze with idempotent merge logic.
- Implemented event-driven ingestion with Kafka.
- Integrated OpenRouter for structured LLM enrichment.
- Modeled Gold serving layers with dbt.
- Implemented Spark analytics jobs that read and write Snowflake tables.
- Orchestrated jobs with Airflow DAGs.
- Exposed curated data through FastAPI.
- Built an interactive Streamlit analytics dashboard.
- Containerized the main services with Docker Compose.

## Why This Is A Data Engineering Project

The strongest part of this project is the system design. Ingestion is separated from enrichment, raw data is preserved before transformation, LLM output is validated before entering Silver, dbt handles serving models, Spark handles heavier analytical aggregation, and API/dashboard layers consume curated Gold data.

## Known Tradeoffs

The project is intentionally portfolio-oriented and local-first. Some services still install dependencies at container startup, TikTok scraping is inherently fragile, and Snowflake/OpenRouter credentials must be supplied through environment variables. These tradeoffs are documented because they are part of the engineering story.
