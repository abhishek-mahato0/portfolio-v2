"use client";

import { useState, useEffect } from "react";
import { useClock } from "@/lib/hooks";

const links: [string, string][] = [
  ["work", "#work"],
  ["experience", "#experience"],
  ["writing", "#writing"],
  ["contact", "#contact"],
];

export default function Nav({ onOpenCmd }: { onOpenCmd: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const clock = useClock();

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const apply = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > last + 4 && y > 160) setHidden(true);
      else if (y < last - 4) setHidden(false);
      last = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "") + (hidden ? " hidden" : "")}>
      <a href="#top" className="nav-name">
        <svg className="star" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z" />
        </svg>
        Abhishek Mahato
      </a>

      <div className="nav-center">
        {links.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </div>

      <div className="nav-right">
        <span className="clock">
          <span className="live" />
          <span className="loc">KTM</span>
          {clock || "--:--:--"}
        </span>
        <button className="cmdk-trigger" onClick={onOpenCmd}>
          menu <kbd>⌘K</kbd>
        </button>
      </div>
    </nav>
  );
}
