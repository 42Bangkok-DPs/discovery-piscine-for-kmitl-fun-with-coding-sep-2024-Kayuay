#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  for num in "$@"; do
    mkdir -p "ex${num}"
  done
fi
