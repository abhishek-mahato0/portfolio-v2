"use client";

import { useState } from "react";
import { timeline } from "@/lib/data";

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section className="wrap pad" id="experience">
      <div className="sec-head">
        <div className="left">
          <span className="sec-kicker mono-label">
            <span className="dotline" /> Experience
          </span>
        </div>
        <span className="idx">/ 02</span>
      </div>
      <h2 className="sec-title reveal" style={{ marginBottom: 40 }}>
        Where I&apos;ve shipped
      </h2>

      <div className="exp-list">
        {timeline.map((t, i) => (
          <div
            className={"exp-row reveal" + (open === i ? " open" : "")}
            key={i}
            onMouseEnter={() => setOpen(i)}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span className="e-org">
              {t.org}
              {t.current && <span className="now">Now</span>}
            </span>
            <span className="e-role">
              {t.role} · {t.place}
            </span>
            <span className="e-span">
              {t.span}
              <span className="exp-toggle">+</span>
            </span>

            <div className="e-detail">
              <div className="exp-detail-inner">
                <ul className="exp-bullets">
                  {t.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="exp-tech">
                  {t.tech.map((x) => (
                    <span className="tag" key={x}>{x}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
