#!/bin/bash
cd /home/kavia/workspace/code-generation/responsive-ui-replication-20688-20707/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

