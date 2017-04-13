#!/bin/sh


bump --no-tags $1

NEW_VERSION=`cat package.json | grep version | sed 's/"//g' | sed 's/,//g' | sed 's/  version: /v./g'`

echo git commit -m \"[$NEW_VERSION] $2\"
git add .
git commit --message="[$NEW_VERSION] $2"
git push
