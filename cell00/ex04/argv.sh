#!/bin/bash

# Check the number of arguments and display up to 3
if [ $# -ge 1 ]; then
    echo "$1"
else
    echo "No arguments supplied"
fi

if [ $# -ge 2 ]; then
    echo "$2"
fi

if [ $# -ge 3 ]; then
    echo "$3"
fi
