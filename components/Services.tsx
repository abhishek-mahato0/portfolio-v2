"use client";

import { skills } from "@/lib/data";

export default function Services() {
  return (
    <section className="wrap pad" id="services">
      <div className="sec-head">
        <div className="left">
          <span className="sec-kicker mono-label">
            <span className="dotline" /> Capabilities
          </span>
        </div>
        <p className="sec-note reveal">
          The toolkit — battle-tested in production across the stack, now reaching into applied AI.
        </p>
      </div>
      <h2 className="sec-title reveal" style={{ marginBottom: 40 }}>
        What I work with
      </h2>

      <div className="svc-grid">
        {skills.map((s, i) => (
          <div className="svc reveal" key={s.group}>
            <div className="svc-top">
              <h3>{s.group}</h3>
              <span className="svc-n">0{i + 1}</span>
            </div>
            <div className="svc-chips">
              {s.items.map((it) => (
                <span className="tag" key={it}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
