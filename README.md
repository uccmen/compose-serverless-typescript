# Docker compose + Serverless + Jest + Typescript stack template

## Development
1. Install docker 
3. To emulate AWS λ and API Gateway locally, run `docker-compose run -p 3000:3000 local`

## TDD
1. Functions (and associated tests) can be created using the command
 `sls create function -f myFunction --handler functions/myFunction/index.handler`