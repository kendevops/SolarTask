export function formatCurrency(amount: number): string {
    // Use toLocaleString to format the number with commas
    const formattedNumber = amount.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    // Prepend the dollar sign
    return `$${formattedNumber}`;
}