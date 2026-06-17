import { lineup, pipeline, players } from "./mockData";

function App() {
  const totalProjection = lineup.reduce((sum, player) => sum + player.projection, 0);
  const averageConfidence = lineup.reduce((sum, player) => sum + player.confidence, 0) / lineup.length;

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Public showcase</p>
        <h1>HoopVisionAI</h1>
        <p>
          A private NBA fantasy analytics web app for projection tracking, injury-aware lineup decisions, team depth context, and Sorare-style roster optimization.
        </p>
      </section>

      <section className="metrics">
        <article>
          <span>Mock lineup projection</span>
          <strong>{totalProjection.toFixed(1)}</strong>
        </article>
        <article>
          <span>Average confidence</span>
          <strong>{averageConfidence.toFixed(0)}%</strong>
        </article>
        <article>
          <span>Data mode</span>
          <strong>Mock</strong>
        </article>
      </section>

      <section className="grid">
        <article className="panel wide">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Lineup builder concept</p>
              <h2>Optimized player pool</h2>
            </div>
            <span className="badge">No live API calls</span>
          </div>
          <div className="player-table">
            {players.map((player) => (
              <div key={player.name} className="player-row">
                <strong>{player.name}</strong>
                <span>{player.team}</span>
                <span>{player.matchup}</span>
                <span>{player.l10.toFixed(1)} L10</span>
                <em>{player.projection.toFixed(1)}</em>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>Pipeline</h2>
          <ol className="pipeline">
            {pipeline.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="panel">
          <h2>What It Shows</h2>
          <ul>
            <li>L10 and projection movement</li>
            <li>Injury impact reasoning</li>
            <li>Matchup and defense context</li>
            <li>Lineup cap tradeoffs</li>
            <li>Team depth awareness</li>
          </ul>
        </article>
      </section>

      <section className="architecture">
        <h2>Sanitized Architecture</h2>
        <div className="flow">
          <span>React web app</span>
          <span>Private data layer</span>
          <span>Prediction pipeline</span>
          <span>Sports and fantasy integrations</span>
        </div>
        <p>
          This repository is a public portfolio showcase. It excludes production auth, billing, database credentials, pipeline secrets, and external integration details.
        </p>
      </section>
    </main>
  );
}

export default App;

