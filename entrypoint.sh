#!/bin/bash
case "$PROCESS" in
"LINT")
    npm run lint
    ;;
"TEST")
    npm run test
    ;;
"DEV")
    npm run dev
    ;;
"PROD")
    npm run build && npm run start
    ;;
*)
    echo "NO PROCESS SPECIFIED!>_<"
    exit 1
    ;;
esac
