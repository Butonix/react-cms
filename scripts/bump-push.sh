#!/bin/sh


# bump --no-tags --patch

NEW_VERSION=`cat package.json | grep version | sed 's/"//g' | sed 's/,//g' | sed 's/  version: /v./g'`

echo git commit -m \"[$NEW_VERSION] $1\"
git add .
git commit --message=\"[$NEW_VERSION] $1\"
git push
