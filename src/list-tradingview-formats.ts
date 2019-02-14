/**
 * list-tradingview-formats
 * Generate a list of timeframes in TradingView format
 */

const fill = require('fill-range')

// `Trading View format` of timeframes is hereby defined as follows:

// - Minutes are expressible by an integer from 1 to 1440
// - Hours are expressible by an integer from 1 to 24, followed by a
//   capital `H`
// - Days are expressible by an integer from 1 to 365, followed by a
//   capital `D`
// - Weeks are expressible by an integer from 1 to 52, followed by a
//   capital `W`
// - Months expressible by an integer from 1 to 12, followed by a
//   capital `M`
// - Hours, Days, Weeks, Months may all have an implicit quantifier of
//   `1`, e.g. `H` is equivalent to `1H`
//
// Any other string is not a timeframe in `Trading View format`.

/**
 * TODO: document
 */
export default function listTradingviewFormats(): string[] {
    let timeframes: string[] = []

    fill(1, 1440).forEach((n: number) => timeframes.push(`${n}`))
    fill(1, 24).forEach((n: number) => timeframes.push(`${n}H`))
    fill(1, 365).forEach((n: number) => timeframes.push(`${n}D`))
    fill(1, 52).forEach((n: number) => timeframes.push(`${n}W`))
    fill(1, 12).forEach((n: number) => timeframes.push(`${n}M`))

    return timeframes
}
