"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { Ic } from "@/components/Icons";

function SectionHead({ label, title, note }: { label: string; title?: string; note?: string }) {
  return (
    <div className="sec-head">
      <div className="left">
        <span className="sec-kicker mono-label">
          <span className="dotline" /> {label}
        </span>
        {title && <h2 className="sec-title reveal">{title}</h2>}
      </div>
      {note && <p className="sec-note reveal">{note}</p>}
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState(-1);
  const pvRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (pvRef.current) {
      pvRef.current.style.left = e.clientX + "px";
      pvRef.current.style.top = e.clientY + "px";
    }
  };

  const cur = projects[active];

  return (
    <section className="wrap pad" id="work" onMouseMove={onMove}>
      <SectionHead
        label="Selected Work"
        title="Built to ship"
        note="Production platforms solving real problems — e-learning at scale, geospatial systems, and developer tooling."
      />

      <div className="work-list">
        {projects.map((p, i) => (
          <div
            className="work-row reveal"
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(-1)}
            onClick={() => window.open(p.url, "_blank", "noopener")}
          >
            <span className="w-no">0{i + 1}</span>
            <span className="w-name">{p.name}</span>
            <span className="w-cat">{p.kind} · {p.scale}</span>
            <span className="w-arrow">{Ic.arrow()}</span>
          </div>
        ))}
      </div>

      {/* key=active forces full remount on each project change so image always syncs */}
      <div className={"work-preview" + (active > -1 ? " on" : "")} ref={pvRef}>
        {cur && (
          <div className="pv-img" key={active}>
            <Image
              src={cur.preview}
              alt={cur.name}
              fill
              sizes="440px"
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
            <div className="pv-overlay" />
            <div className="pv-content">
              <p className="pv-desc">{cur.blurb}</p>
              <div className="pv-chips">
                {cur.tech.slice(0, 5).map((t) => (
                  <span key={t} className="pv-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
