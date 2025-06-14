export function formatStats(stats: number) {
  if (stats >= 1_000_000_000) {
    return (stats / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (stats >= 1_000_000) {
    return (stats / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (stats >= 1_000) {
    return (stats / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return stats.toString();
}
