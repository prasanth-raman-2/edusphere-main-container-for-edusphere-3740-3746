#!/bin/bash
cd /home/kavia/workspace/edusphere-main-container-for-edusphere-3740-3746/edu_sphere_core
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

