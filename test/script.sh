#!/bin/bash

pushd example

yarn install

export SLS_IGNORE_WARNING=*
serverless deploy
result=`serverless invoke --function proxy --path ../test/payload.json`
test=`echo $result | grep "hello"`

if [ -z "$test" ]
then
  echo "Invalid response\n----------------\n$result"
else
  echo "Test passed!"
fi

serverless remove

if [ -z "$test" ]
then
  exit 1
fi

popd
