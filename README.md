# customers-service-sales-portfolio
This repository showcases my professional skills, experience, and sample work in **Customer Service**, **Sales**, and **Support Operations**.   It includes scripts, templates, achievements, and tools that demonstrate my ability to communicate clearly, solve customer issues, and deliver strong sales performance.
#!/usr/bin/env bash
set -euo pipefail

REPO_SSH="git@github.com:chnsimmons23-tech/customers-service-sales-portfolio.git"
BRANCH="initial-setup"
TMPDIR="$(pwd)/customers-service-sales-portfolio"

if [ -d "$TMPDIR" ]; then
  echo "Directory $TMPDIR already exists. Please remove or run script from a different location."
  exit 1
fi

mkdir -p "$TMPDIR"
cd "$TMPDIR"

# Initialize git (or reuse existing)
git init

# Create files
cat > README.md <<'EOF'
# customers-service-sales-portfolio

A small service to manage customers and their sales portfolio.

Overview
- REST API for customers and a simple sales portfolio model.
- Starter stack: Node.js + TypeScript + Express.
- Minimal in-memory implementation to get started; add a database (Postgres/MySQL) or an ORM (Prisma/TypeORM) later.
- Dockerized with a small multi-stage build.
- Basic GitHub Actions CI workflow included.

Quick start (local)
1. Install dependencies
