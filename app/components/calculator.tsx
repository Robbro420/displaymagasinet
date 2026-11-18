"use client";

import { useState } from "react";
import { estimatedCpmSek, shopUrl } from "../site";

const goals = ["Fler besök", "Ökad kännedom", "Fler leads"];

export function Calculator() {
  const [budget, setBudget] = useState(15000);
  const [goal, setGoal] = useState(goals[0]);

  // Avrundas till närmaste tusental – ett estimat ska inte se exaktare ut än det är.
  const impressions = Math.round(budget / estimatedCpmSek) * 1000;
  const shopLink = `${shopUrl}?goal=${encodeURIComponent(goal)}&budget=${budget}`;

  return (
    <div className="calculator">
      <div className="calc-top">
        <span>Min kampanj</span>
        <b>Estimat</b>
      </div>

      <span className="calc-label" id="goal-label">
        Vad vill du uppnå?
      </span>
      <div className="goals" role="group" aria-labelledby="goal-label">
        {goals.map((g) => (
          <button
            type="button"
            key={g}
            className={goal === g ? "active" : ""}
            aria-pressed={goal === g}
            onClick={() => setGoal(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <label className="calc-label" htmlFor="budget">
        Månadsbudget <strong>{budget.toLocaleString("sv-SE")} kr</strong>
      </label>
      <input
        id="budget"
        type="range"
        min="5000"
        max="50000"
        step="5000"
        value={budget}
        style={{ "--fill": `${((budget - 5000) / 45000) * 100}%` } as React.CSSProperties}
        onChange={(e) => setBudget(Number(e.target.value))}
      />
      <div className="range" aria-hidden="true">
        <span>5 000 kr</span>
        <span>50 000 kr</span>
      </div>

      <div className="estimate" aria-live="polite">
        <span>Uppskattad synlighet per månad</span>
        <strong>≈ {impressions.toLocaleString("sv-SE")}</strong>
        <em>visningar</em>
        <small>Indikativt estimat – faktiskt utfall varierar.</small>
      </div>

      <a className="button" href={shopLink} target="_blank" rel="noopener noreferrer">
        Prova vår shop <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
