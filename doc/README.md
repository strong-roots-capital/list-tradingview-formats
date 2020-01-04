
list-tradingview-formats [![Build status](https://travis-ci.org/strong-roots-capital/list-tradingview-formats.svg?branch=master)](https://travis-ci.org/strong-roots-capital/list-tradingview-formats) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/list-tradingview-formats.svg)](https://npmjs.org/package/@strong-roots-capital/list-tradingview-formats) [![codecov](https://codecov.io/gh/strong-roots-capital/list-tradingview-formats/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/list-tradingview-formats)
=======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Generate a list of timeframes in Trading View format

Install
-------

```shell
npm install @strong-roots-capital/list-tradingview-formats
```

Use
---

```typescript
import listTradingviewFormats from '@strong-roots-capital/list-tradingview-formats'

console.log(listTradingviewFormats())
//=> ['1', '2', '3', '4', ...]
```

Related
-------

*   [is-tradingview-format](https://github.com/strong-roots-capital/is-tradingview-format)

## Index

### Functions

* [listTradingviewFormats](#listtradingviewformats)

---

## Functions

<a id="listtradingviewformats"></a>

###  listTradingviewFormats

▸ **listTradingviewFormats**(): `string`[]

*Defined in [list-tradingview-formats.ts:21](https://github.com/strong-roots-capital/list-tradingview-formats/blob/c0eb4c6/src/list-tradingview-formats.ts#L21)*

Return list of all valid Trading View-formatted timeframes.

**Returns:** `string`[]
List of all valid Trading View-formatted timeframes.

___

