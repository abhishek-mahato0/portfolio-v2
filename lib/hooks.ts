"use client";

import { useEffect, useState } from "react";

export function useClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ktm = new Date(utc + (5 * 60 + 45) * 60000);
      const hh = String(ktm.getHours()).padStart(2, "0");
      const mm = String(ktm.getMinutes()).padStart(2, "0");
      const ss = String(ktm.getSeconds()).padStart(2, "0");
      setT(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function tweenIn(el: HTMLElement, opts?: { dur?: number; dy?: number; delay?: number }) {
  const dur = opts?.dur ?? 720;
  const dy = opts?.dy ?? 26;
  const delay = opts?.delay ?? 0;
  if (el.dataset.shown) return;
  el.dataset.shown = "1";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    el.style.opacity = "1";
    el.style.transform = "none";
    return;
  }
  el.style.opacity = "0";
  el.style.transform = `translateY(${dy}px)`;
  let start: number | null = null;
  setTimeout(() => {
    const id = setInterval(() => {
      if (start === null) start = performance.now();
      let p = (performance.now() - start) / dur;
      if (p >= 1) {
        p = 1;
        clearInterval(id);
      }
      const e = 1 - Math.pow(1 - p, 3);
      el.style.opacity = String(e);
      el.style.transform = `translateY(${dy * (1 - e)}px)`;
      if (p >= 1) el.style.transform = "none";
    }, 16);
  }, delay);
}

export function useReveal() {
  useEffect(() => {
    let lastRun = 0;
    let pending: ReturnType<typeof setTimeout> | null = null;

    const check = () => {
      lastRun = Date.now();
      pending = null;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (el.dataset.shown) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > -80) tweenIn(el, { dy: 26 });
      });
    };

    const onScroll = () => {
      const since = Date.now() - lastRun;
      if (since > 90) check();
      else if (!pending) pending = setTimeout(check, 100);
    };

    check();
    const ts = [60, 200, 500, 1000, 1800].map((d) => setTimeout(check, d));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ts.forEach(clearTimeout);
      if (pending) clearTimeout(pending);
    };
  }, []);
}
