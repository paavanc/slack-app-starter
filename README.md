# slack-app-starter
Works in node version 13.3.0.  npm test runs the tests and npm run starts the server.

docker run -p 8080:8080 <image name> -will run on port 8080

Heroku Deploy:
www.heroku.com -  A website that auto deploys apps

Steps:
1. heroku container:login
2. heroku create
3. heroku container:push web
4. heroku container:release web
5. heroku open

Further Instructions: https://devcenter.heroku.com/articles/container-registry-and-runtime

Slack app reference: https://x-team.com/blog/create-slack-app-in-3-minutes/
