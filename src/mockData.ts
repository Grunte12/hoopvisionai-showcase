export const players = [
  { name: "Jalen Green", team: "HOU", projection: 43.8, l10: 37.2, matchup: "Easy", confidence: 84 },
  { name: "Tyrese Maxey", team: "PHI", projection: 46.1, l10: 41.6, matchup: "Medium", confidence: 79 },
  { name: "Chet Holmgren", team: "OKC", projection: 39.4, l10: 36.9, matchup: "Hard", confidence: 72 },
  { name: "Desmond Bane", team: "MEM", projection: 38.6, l10: 34.8, matchup: "Easy", confidence: 76 },
  { name: "Jalen Johnson", team: "ATL", projection: 41.2, l10: 39.1, matchup: "Medium", confidence: 81 },
];

export const lineup = players.slice(0, 5);

export const pipeline = [
  "Sports data ingestion",
  "Feature engineering",
  "Projection model",
  "Injury impact layer",
  "Lineup optimizer",
  "Dashboard delivery",
];

