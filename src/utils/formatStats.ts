export function formatStats(stats: number) {
        let value : number | string = stats;
        if (typeof value === 'number') {
            if (value >= 1_000_000) {
                value = Math.floor(value / 1_000_000) + 'M';
            } else if (value >= 1_000) {
                value = Math.floor(value / 1_000) + 'K';
            } else if (value >= 1_000_000_000) {
                value = Math.floor(value / 1_000_000_000) + 'B';
            }
        }
        return value.toString();
}