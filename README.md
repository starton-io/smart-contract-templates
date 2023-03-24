# Warning:
Template not audited yet, it will be in the nexts weeks.

# StartonSmartContracts

This repository has all the templates provided by Starton that you can access and deploy using the official API.

## Installation

First of all, make sure you have `node` and `yarn` installed successfully

You can now install the dependencies using:

```shell
yarn
```

It installs mainly hardhat and a few plugins on top of it that are usefull for developpements

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

## Author

[Starton](https://www.starton.io/)
