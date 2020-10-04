build:
	cd catalog-api/; yarn; cd ..;
	cd recommendation-api/; yarn; cd ..;
	docker-compose build;
	docker-compose up -d;

populate:
	docker exec -it catalog-api yarn sequelize db:migrate;
	docker exec -it catalog-api yarn sequelize db:seed:all;

logs:
	docker-compose logs -f;

recommendation-logs:
	docker logs -f --tail 100 recommendation-api;

catalog-logs:
	docker logs -f --tail 100 catalog-api;

down:
	docker-compose down;

init:
	make build;
	make populate;