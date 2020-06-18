# My Mobile Tutor

## Running on your local computer

1. Install Node.js and live-server

    `npm i -g live-server`

2. Navigate to the project directory and run live-server

    `live-server`

## Deployment to live server

1. Install git command line tools: https://git-scm.com/downloads

2. Clone the repository to a local folder with git clone.

    `git clone https://github.com/chooseyourfuture/mymobiletutor.git`

3. Navigate to the project directory via command line

4. Add live server as remote origin named live for git. You only need to do this once.

    `git remote add live ssh://choos562@studentmobileapp.com/home/choos562/repositories/mymobiletutor`

5. Push to the newly created "live" origin. You will need the webhotel password for this step. Remember to also push the changes to Github to keep the repositories in sync.

    `git push -u live master`

    `git push -u origin master`