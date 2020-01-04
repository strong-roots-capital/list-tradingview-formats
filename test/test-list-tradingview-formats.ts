import test from 'ava'
const fill = require('fill-range')

/**
 * Library under test
 */

import listTradingviewFormats from '../src/list-tradingview-formats'

let defaultList = listTradingviewFormats()

const defaultListShouldInclude = (t: any, timeframe: string) => {
    t.true(defaultList.includes(timeframe))
    defaultList = defaultList.filter(s => s !== timeframe)
}
defaultListShouldInclude.title = (_ = '', timeframe: string) => `returned timeframes when called with no arguments should include ${timeframe}`

fill(1, 1440).forEach((n: number) => test(defaultListShouldInclude, `${n}`))
fill(1, 24).forEach((n: number) => test(defaultListShouldInclude, `${n}H`))
fill(1, 365).forEach((n: number) => test(defaultListShouldInclude, `${n}D`))
fill(1, 52).forEach((n: number) => test(defaultListShouldInclude, `${n}W`))
fill(1, 12).forEach((n: number) => test(defaultListShouldInclude, `${n}M`))

test(defaultListShouldInclude, 'H')
test(defaultListShouldInclude, 'D')
test(defaultListShouldInclude, 'W')
test(defaultListShouldInclude, 'M')

test('returned timeframes when called with no arguments should include no other timeframes', t => {
    t.deepEqual([], defaultList)
})
