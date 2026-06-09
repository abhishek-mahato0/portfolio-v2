"use client";

import { blogs } from "@/lib/data";
import { Ic } from "@/components/Icons";

export default function Writing() {
  return (
    <section className="wrap pad" id="writing">
      <div className="sec-head">
        <div className="left">
          <span className="sec-kicker mono-label">
            <span className="dotline" /> Writing
          </span>
        </div>
        <p className="sec-note reveal">
          I write about the things I take apart — validators, CSS engines, developer ergonomics.
        </p>
      </div>
      <h2 className="sec-title reveal" style={{ marginBottom: 40 }}>
        From the notebook
      </h2>

      <div className="writing-list">
        {blogs.map((b, i) => (
          <a
            className="write-row reveal"
            key={i}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="wr-no">0{i + 1}</span>
            <div>
              <h3>{b.title}</h3>
              <p>{b.blurb}</p>
            </div>
            <div className="wr-meta">
              <span>{b.read}</span>
              <span className="ar">{Ic.arrow()}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
