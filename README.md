# StartonSmartContracts

his repository has all the templates provided by Starton that you can access and deploy using the official API.

## Requirements

You will need :

- [NodeJS](https://nodejs.org/en) (we recommend the use of [nvm](https://github.com/nvm-sh/nvm))
- [Yarn](https://yarnpkg.com/)

## Installation

To install the project, first clone the repository and go inside project directory, then :

- With [yarn](https://yarnpkg.com/) :
  ```bash
  $ yarn install
  ```

## Tests

You can find all the tests in the test directory

You can run them using:

```shell
yarn test
```

If you wants to get the coverage use:

```shell
yarn coverage
```

When you're going to run the tests you will get all the informations about gas comsuption of every functions inside the contracts

## Documentation

A script is available to generate the documentation of the contracts

```shell
yarn doc FILENAME
```

This script will take all the informations as input from the doc.ts file and fill the abi, bytecode and compilation details. PS: You need to specify the contractName in the compilation details for it to works

## Contributing

Contributions are always welcome!

See ![CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

Please adhere to Starton's ![Code of Conduct](CODE_OF_CONDUCT.md).

## License

![Apache License 2.0](LICENSE.md)

## Authors

- Starton [support@starton.com](mailto:support@starton.com)
- Matéo Viel [mateo@starton.com](mailto:mateo@starton.com)
