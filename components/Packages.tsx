"use client";

import { useState } from "react";
import { packages } from "@/lib/data";
import { Ic } from "@/components/Icons";

export default function Packages() {
  const [copied, setCopied] = useState(-1);

  const copy = (i: number, cmd: string) => {
    navigator.clipboard?.writeText(cmd).then(() => {
      setCopied(i);
      setTimeout(() => setCopied(-1), 1400);
    }).catch(() => {});
  };

  return (
    <section className="wrap pad" id="packages">
      <div className="sec-head">
        <div className="left">
          <span className="sec-kicker mono-label">
            <span className="dotline" /> Open Source
          </span>
        </div>
        <span className="idx">/ 03</span>
      </div>
      <h2 className="sec-title reveal" style={{ marginBottom: 40 }}>
        Published to npm
      </h2>

      <div className="pkg-grid">
        {packages.map((p, i) => (
          <div className="pkg reveal" key={i}>
            <div className="pkg-top">
              <span className="npm-badge">npm</span>
              <h3>{p.title}</h3>
            </div>
            <p>{p.desc}</p>
            <div className="install">
              <code>
                <span className="d">$ </span>
                {p.install}
              </code>
              <button className="copy-btn" onClick={() => copy(i, p.install)}>
                {copied === i ? Ic.check() : Ic.copy()}
                {copied === i ? "copied" : "copy"}
              </button>
            </div>
            <div className="pkg-links">
              <a href={p.npm} target="_blank" rel="noopener noreferrer">
                {Ic.npm()} npm
              </a>
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                {Ic.github()} source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
