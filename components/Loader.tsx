"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [shown, setShown] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tExit = reduce ? 300 : 1750;
    const tGone = reduce ? 700 : 2780;

    const a = setTimeout(() => setShown(true), 110);
    const b = setTimeout(() => {
      setExiting(true);
      document.documentElement.classList.add("booted");
      window.dispatchEvent(new Event("am:boot"));
    }, tExit);
    const c = setTimeout(() => setGone(true), tGone);
    return () => { clearTimeout(a); clearTimeout(b); clearTimeout(c); };
  }, []);

  if (gone) return null;

  const word = (w: string, base: number) =>
    w.split("").map((ch, i) => (
      <span className="ld-ltr" key={i} style={{ transitionDelay: `${base + i * 45}ms` }}>
        {ch}
      </span>
    ));

  return (
    <div
      className={"loader" + (shown ? " show" : "") + (exiting ? " out" : "")}
      aria-hidden="true"
    >
      <div className="ld-meta ld-top">
        <span>Portfolio</span>
        <span>© 2026</span>
      </div>

      <div className="ld-center">
        <h2 className="ld-name">
          <span className="ld-line">{word("Abhishek", 120)}</span>
          <span className="ld-line">{word("Mahato", 320)}</span>
        </h2>
        <div className="ld-role">
          <span className="w2">Software Engineer</span>
        </div>
      </div>

      <div className="ld-meta ld-bottom">
        <span>Kathmandu, NP</span>
        <span className="ld-count">loading</span>
      </div>

      <div className="ld-rule"><span /></div>
    </div>
  );
}
