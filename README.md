## Monopoly simulator

This repository is a simple simulator of the Monopoly game with some predefined players with specific behaviors.

### Prerequisites

- NodeJS 18

if you don't have the NodeJS version specified above, you can run this app with Docker by running `docker-compose up -d`

### Setup

`yarn install`

### Run and build

Before running make sure that the port 9999 is not in use

- `yarn dev` to live reload development
- `yarn test` to run the unit tests
- `yarn build` to generate the `/dist` folder with the transpiled JS code
- `yarn start` to run the build with no live reload

### Try it out

```shell
curl --location --request GET 'localhost:9999/jogo/simular'
```

