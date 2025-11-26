export function generateComparisonInsights(
  urlA: string, 
  urlB: string, 
  shared: string[], 
  aOnly: string[], 
  bOnly: string[], 
  score: number
): string {
  const formatUrl = (url: string) => {
    try {
      return new URL(url.startsWith("http") ? url : `https://${url}`).hostname;
    } catch {
      return url;
    }
  };

  const siteA = formatUrl(urlA);
  const siteB = formatUrl(urlB);

  let summary = "";

  if (score >= 70) {
    summary += `These websites are highly similar in their technology stacks, sharing ${score}% of their technologies. `;
  } else if (score >= 40) {
    summary += `These websites have some overlap but also notable differences, with a ${score}% similarity score. `;
  } else if (score > 0) {
    summary += `These websites have largely different technology stacks, sharing only ${score}% of their technologies. `;
  } else {
    summary += `These websites appear to use completely different technology stacks with no overlap detected. `;
  }

  if (shared.length > 0) {
    const sharedList = shared.slice(0, 5).join(", ");
    const moreShared = shared.length > 5 ? ` and ${shared.length - 5} more` : "";
    summary += `Both sites use ${sharedList}${moreShared}. `;
  }

  if (aOnly.length > 0) {
    const aList = aOnly.slice(0, 3).join(", ");
    const moreA = aOnly.length > 3 ? ` (+${aOnly.length - 3} more)` : "";
    summary += `${siteA} uniquely uses ${aList}${moreA}. `;
  }

  if (bOnly.length > 0) {
    const bList = bOnly.slice(0, 3).join(", ");
    const moreB = bOnly.length > 3 ? ` (+${bOnly.length - 3} more)` : "";
    summary += `${siteB} uniquely uses ${bList}${moreB}.`;
  }

  return summary.trim();
}
