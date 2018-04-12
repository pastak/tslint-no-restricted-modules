# tslint-no-restricted-modules

This is Rule for [TSLint](https://palantir.github.io/tslint/) like [no-restricted-modules in ESLint](https://eslint.org/docs/rules/no-restricted-modules).

## Usage

install from npm

```
$ npm install -D tslint-no-restricted-modules
```

Configure on your `tslint.json`


```json
{
    "rulesDirectory": [
        "node_modules/tslint-no-restricted-modules/dist"
   ],
   "rules": {
       "no-restricted-modules": [true, "module-a", "module-b"]
   }
}
```
