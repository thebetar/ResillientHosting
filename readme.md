# Introduction

For one of my university courses I learnt how important resilliency is within systems. Since docker compose is one of my favourite easy to run way of using replicas I decided to make a small demo and try this out.

## How to run

The steps to running this project are very simple, **if docker is installed**.

1. `docker compose build`
2. `docker compose up`
3. Navigate to `http://localhost:8080`

After following these steps you will see an HTML page. As you can see after reach reload the container ID changes.
To test the replication

1. List the current running docker containers with `docker ps`
2. Navigate to `http://localhost:8080/kill`, this will go to the endpoint which returns a message and then kills the process with exit code 1
3. List the current runnign docker containers again with `docker ps` and see that one of the containers now has a different **STATUS**
