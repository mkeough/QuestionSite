docker build -t QuestionSite-image .

docker tag QuestionSite-image registry.heroku.com/QuestionSite/web


docker push registry.heroku.com/QuestionSite/web

heroku container:release web -a QuestionSite