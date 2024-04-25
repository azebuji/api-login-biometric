export const calculatePercentChange = (currentValue: number, previousValue: number): number => {
    let percentChange = 0
    percentChange = ((currentValue - previousValue) / previousValue) * 100;
    if (!percentChange || isNaN(percentChange || percentChange)) percentChange = 0;
    return isFinite(percentChange) ? percentChange : 0;
}