#!/bin/bash
echo “Deploy”

git pull
docker compose -f docker-compose.prod.yml up -d --build
