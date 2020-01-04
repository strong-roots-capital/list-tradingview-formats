/**
 * list-tradingview-formats
 * Generate a list of timeframes in TradingView format
 */


/* Starts with 1 */
function list(start: number, end: number): number[] {

    return Array
        .from({length: end - start + 1})
        .map((_value, index) => index + 1)
}


/**
 * Return list of all valid Trading View-formatted timeframes.
 *
 * @returns List of all valid Trading View-formatted timeframes.
 */
export default function listTradingviewFormats(): string[] {

    let timeframes: string[] = []

    list(1, 1440).forEach(n => timeframes.push(`${n}`))
    list(1, 24).forEach(n => timeframes.push(`${n}H`))
    list(1, 365).forEach(n => timeframes.push(`${n}D`))
    list(1, 52).forEach(n => timeframes.push(`${n}W`))
    list(1, 12).forEach(n => timeframes.push(`${n}M`))

    timeframes.push('H', 'D', 'W', 'M')

    return timeframes
}
