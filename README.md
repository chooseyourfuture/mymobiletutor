# My Mobile Tutor

## Running on your local computer

1. Install Node.js and live-server

    `npm i -g live-server`

2. Navigate to the project directory and run live-server

    `live-server`

## Deployment to live server

1. Install git command line tools: https://git-scm.com/downloads

2. Navigate to the project directory via command line

3. Add live server as remote origin named live for git. You only need to do this once.

    `git remote add live ssh://choos562@studentmobileapp.com/home/choos562/repositories/mymobiletutor`

4. Push to the newly created "live" origin.

    `git push -u live master`