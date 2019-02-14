/**
 * list-tradingview-formats
 * Generate a list of timeframes in TradingView format
 */

const fill = require('fill-range')

/**
 * Return list of all valid Trading View-formatted timeframes.
 *
 * @returns List of all valid Trading View-formatted timeframes.
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
