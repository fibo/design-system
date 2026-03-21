#!/bin/bash

npm test
[ $? -ne 0 ] && exit 1

EXIT_CODE=0

git diff --name-only --cached | grep -E '\.(css|html|js|md)$' | while read FILE
do
  [ -f "$FILE" ] || continue
  ./node_modules/.bin/prettier --write "$FILE"
  [ $? -ne 0 ] && EXIT_CODE=1
  git add "$FILE"
done

exit $EXIT_CODE
