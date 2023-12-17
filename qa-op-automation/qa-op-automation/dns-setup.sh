#!/bin/bash

HOSTS_QA=(
  "graphql.qa.evgo.com"
  "operator.qa.evgo.com"
  "subscriptions.graphql.qa.evgo.com"
  "unleash.falcon.qa.evgo.com"
)

HOSTS_STG=(
  "graphql.stg.evgo.com"
  "operator.stg.evgo.com"
  "subscriptions.graphql.stg.evgo.com"
  "unleash.falcon.stg.evgo.com"
)

HOSTS_PROD=(
  "graphql.prod.evgo.com"
  "operator.evgo.com"
  "subscriptions.graphql.prod.evgo.com"
  "unleash.falcon.prod.evgo.com"
)

if [ $TEST_ENV == "qa" ]; then
  declare -n HOSTS=HOSTS_QA
elif [ $TEST_ENV == "stg" ]; then
  declare -n HOSTS=HOSTS_STG
elif [ $TEST_ENV == "prod" ]; then
  declare -n HOSTS=HOSTS_PROD
fi

IP=$(nslookup $DNS | grep Address: | tail -1 | sed 's/Address://' | sed -e 's/^[ \t]*//')

echo "*** DNS SETUP ***"
echo
echo "ENV: $TEST_ENV"
echo "DNS=$DNS"
echo "IP=$IP"

for i in "${HOSTS[@]}"; do
  echo "Adding $IP $i to hosts file"
  echo "${IP} $i" >> /etc/hosts
done

echo "/etc/hosts file content:"
cat /etc/hosts

echo
echo "*** DONE ***"