"use client";

import { useState, useEffect } from "react";
import { identity } from "@/lib/data";
import { Ic } from "@/components/Icons";

export default function Hero() {
  const [shown, setShown] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let done = false;
    let lockT: ReturnType<typeof setTimeout>;

    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      lockT = setTimeout(() => setLocked(true), reduce ? 0 : 1750);
    };

    window.addEventListener("am:boot", reveal);
    // fallback if boot event is missed
    const fb = setTimeout(reveal, reduce ? 300 : 2700);
    // already booted (e.g. hot reload)
    if (document.documentElement.classList.contains("booted")) reveal();

    return () => {
      window.removeEventListener("am:boot", reveal);
      clearTimeout(fb);
      clearTimeout(lockT);
    };
  }, []);

  const line1 = ["Hello", "World,", "I", "am"];
  const name = "Abhishek";
  const nameBase = 240;

  return (
    <header
      className={"hero3" + (shown ? " in" : "") + (locked ? " lock" : "")}
      id="top"
    >
      <div className="hero3-amb" aria-hidden="true" />
      <div className="hero3-grain" aria-hidden="true" />

      <div className="wrap hero3-inner">
        <div className="h3-eyebrow" style={{ transitionDelay: "60ms" }}>
          <span className="live" /> Available for senior roles
          <span className="sep" /> {identity.location}
        </div>

        <h1 className="h3-title">
          <span className="ln1">
            {line1.map((w, i) => (
              <span
                className="wd"
                key={i}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {w}
              </span>
            ))}
          </span>
          <span className="ln2 h3-name">
            {name.split("").map((ch, i) => (
              <span
                className="ltr"
                key={i}
                style={{ transitionDelay: `${nameBase + i * 70}ms` }}
              >
                {ch}
              </span>
            ))}
            <span
              className="dot"
              style={{ transitionDelay: `${nameBase + name.length * 70}ms` }}
            >
              .
            </span>
          </span>
        </h1>

        <div className="h3-role">
          <span className="r1" style={{ transitionDelay: "760ms" }}>
            Software Engineer
          </span>
        </div>

        <div className="h3-meta" style={{ transitionDelay: "860ms" }}>
          <span className="hm-n">
            3<span className="plus">+</span>
          </span>
          <span className="hm-t">years experience</span>
          <span className="hm-sep" />
          <span className="hm-l">Full-stack &amp; AI</span>
          <span className="hm-sep" />
          <span className="hm-l">{identity.location}</span>
        </div>

        <div className="h3-cta" style={{ transitionDelay: "960ms" }}>
          <a className="btn solid" href="#work">
            Selected work <span className="ar">{Ic.arrow()}</span>
          </a>
          <a
            className="btn-ghost"
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Ic.resume()} Résumé
          </a>
          <a className="btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="bar" /> scroll
      </div>
    </header>
  );
}
