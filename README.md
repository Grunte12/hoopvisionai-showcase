# HoopVisionAI Showcase

HoopVisionAI is a private NBA fantasy analytics web app focused on Sorare-style decision support: projections, L10 tracking, injury impact, team depth, and lineup optimization.

> This is a public showcase repository. The production source code is private because it contains authentication flows, billing integration, database access, sports-data pipeline details, and deployment-specific configuration.

## What This Repository Contains

- A small mock React/Vite app showing the product concept
- Mock player projections and lineup data
- A sanitized architecture description
- Portfolio-ready documentation

It does not include production auth, Supabase functions, Stripe webhooks, service-role access, raw data pipelines, credential IDs, or real user data.

## Product Capabilities Represented

- L10 and projection movement tracking
- Injury-aware opportunity analysis
- Team depth context
- Lineup cap and matchup tradeoff evaluation
- Dashboard-first workflow for daily fantasy decisions

## Tech Stack Represented

- React
- TypeScript
- Vite
- Mock analytics data

The private app also uses a database-backed data layer and Python prediction pipeline, but those implementation details are intentionally summarized rather than exposed here.

## Sanitized Architecture

```text
React web app
      |
      v
Private data layer
      |
      v
Prediction pipeline
      |
      v
Sports data and fantasy integrations
```

## Run Locally

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

## Why The Full Source Is Private

The deployed HoopVisionAI app includes private authentication, subscription, database, pipeline, and external-integration logic. Keeping that source private avoids exposing operational details while still allowing this repository to communicate the product idea, architecture, and engineering scope.

## What I Learned

- Building analytics workflows around real user decisions
- Designing projection systems that combine model output with contextual signals
- Separating public product storytelling from private production infrastructure
- Treating credentials, auth flows, and data pipelines as sensitive implementation details

