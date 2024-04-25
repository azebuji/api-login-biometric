export function formatMoney(money?: string): string {
    let result = money ? money.replace('.', ',') : '0,00';
    return result.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}