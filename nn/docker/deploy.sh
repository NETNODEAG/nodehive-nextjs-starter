#!/bin/bash
echo “Deploy”

git pull
sudo docker compose up -d --build
