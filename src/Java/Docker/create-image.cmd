docker build --no-cache -f SQL\Dockerfile.PostgreSql -t anyadodelat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t anyadodelat-java/app ../../..
