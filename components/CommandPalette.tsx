"use client";

import { useState, useEffect, useRef } from "react";
import { identity } from "@/lib/data";
import { Ic } from "@/components/Icons";

type Item = {
  g: string;
  ico: React.ReactNode;
  label: string;
  hint: string;
  act: () => void;
};

function go(setOpen: (v: boolean) => void, hash: string) {
  setOpen(false);
  const el = document.querySelector(hash);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }
}

export default function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = [
    { g: "Navigate", ico: Ic.home(), label: "Top", hint: "home", act: () => go(setOpen, "#top") },
    { g: "Navigate", ico: Ic.grid(), label: "Selected work", hint: "work", act: () => go(setOpen, "#work") },
    { g: "Navigate", ico: Ic.clock(), label: "Experience", hint: "exp", act: () => go(setOpen, "#experience") },
    { g: "Navigate", ico: Ic.layers(), label: "Capabilities", hint: "stack", act: () => go(setOpen, "#services") },
    { g: "Navigate", ico: Ic.box(), label: "npm packages", hint: "oss", act: () => go(setOpen, "#packages") },
    { g: "Navigate", ico: Ic.pen(), label: "Writing", hint: "blog", act: () => go(setOpen, "#writing") },
    { g: "Navigate", ico: Ic.send(), label: "Contact", hint: "hire", act: () => go(setOpen, "#contact") },
    {
      g: "Actions", ico: Ic.mail(), label: "Send an email", hint: "mailto",
      act: () => { window.location.href = `mailto:${identity.email}`; },
    },
    {
      g: "Actions", ico: Ic.resume(), label: "Download résumé", hint: "pdf",
      act: () => window.open(identity.resume, "_blank"),
    },
    {
      g: "Actions", ico: Ic.github(), label: "Open GitHub", hint: "↗",
      act: () => window.open(identity.github, "_blank"),
    },
    {
      g: "Actions", ico: Ic.linkedin(), label: "Open LinkedIn", hint: "↗",
      act: () => window.open(identity.linkedin, "_blank"),
    },
  ];

  const filtered = items.filter((it) =>
    (it.label + " " + it.g + " " + it.hint).toLowerCase().includes(q.toLowerCase().trim())
  );

  useEffect(() => { setActive(0); }, [q]);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
      else if (e.key === "Enter") { e.preventDefault(); filtered[active]?.act(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, setOpen]);

  type Group = { name: string; rows: (Item & { _idx: number })[] };
  const groups: Group[] = [];
  filtered.forEach((it, idx) => {
    let grp = groups.find((g) => g.name === it.g);
    if (!grp) { grp = { name: it.g, rows: [] }; groups.push(grp); }
    grp.rows.push({ ...it, _idx: idx });
  });

  return (
    <div
      className={"cmdk-overlay" + (open ? " open" : "")}
      onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="cmdk" role="dialog" aria-modal="true">
        <div className="cmdk-input-row">
          <span className="pfx">›</span>
          <input
            ref={inputRef}
            className="cmdk-input"
            placeholder="Jump to a section or run a command…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="cmdk-esc">ESC</span>
        </div>

        <div className="cmdk-list">
          {filtered.length === 0 && (
            <div className="cmdk-empty">no matches for &ldquo;{q}&rdquo;</div>
          )}
          {groups.map((g) => (
            <div key={g.name}>
              <div className="cmdk-group">{g.name}</div>
              {g.rows.map((it) => (
                <div
                  key={it.label}
                  className={"cmdk-item" + (it._idx === active ? " active" : "")}
                  onMouseEnter={() => setActive(it._idx)}
                  onClick={it.act}
                >
                  <span className="ci-ico">{it.ico}</span>
                  <span className="ci-label">{it.label}</span>
                  <span className="ci-hint">{it.hint}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
