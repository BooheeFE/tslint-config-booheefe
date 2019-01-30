# tslint-config-booheefe

[![npm](https://img.shields.io/npm/v/tslint-config-booheefe.svg)](https://www.npmjs.com/package/tslint-config-booheefe)
[![npm](https://img.shields.io/npm/dt/tslint-config-booheefe.svg)](https://www.npmjs.com/package/tslint-config-booheefe)
[![GitHub license](https://img.shields.io/github/license/BooheeFE/tslint-config-booheefe.svg)](https://github.com/BooheeFE/tslint-config-booheefe/blob/master/LICENSE)

This package provides BooheeFE's base TS, tslint.json as an extensible shared config.

## Usage

Our default export contains all of our TSLint rules.

First, install this package

```shell
yarn add --dev tslint-config-booheefe tslint

or

npm install --save-dev tslint-config-booheefe tslint
```

Then add following contents to your tslint.json file

```
{
  "extends": ["tslint-config-booheefe"]
}
```

## License

[**The MIT License**](LICENSE).
