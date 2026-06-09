"use client";

import { useRef, useState } from "react";
import { identity } from "@/lib/data";
import { useClock } from "@/lib/hooks";
import { Ic } from "@/components/Icons";

export default function Contact() {
  const clock = useClock();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isPending, setIsPending] = useState(false);
  const [state, setState] = useState<{ ok: boolean; message: string }>({
    ok: false,
    message: "",
  });

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setState({ ok: false, message: "" });

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        },
      );
      const result = await response.json();

      if (response.ok) {
        setState({
          ok: true,
          message: "Message sent — I'll get back to you soon.",
        });
        formRef.current?.reset();
        setForm({ name: "", email: "", message: "" });
      } else {
        setState({
          ok: false,
          message:
            result?.errors?.[0]?.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch {
      setState({
        ok: false,
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <footer className="contact wrap" id="contact">
      <div className="contact-avail reveal">
        <span className="live" /> Available for new work — 2026
      </div>

      <h2 className="contact-big reveal">
        Let&apos;s build
        <br />
        something <span style={{ color: "var(--accent)" }}>together.</span>
      </h2>

      <div className="contact-grid">
        <form ref={formRef} className="cf-form reveal" onSubmit={submit}>
          <div className="cf-field">
            <label htmlFor="cf-name">Your name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              value={form.name}
              onChange={set("name")}
            />
          </div>
          <div className="cf-field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              value={form.email}
              onChange={set("email")}
            />
          </div>
          <div className="cf-field">
            <label htmlFor="cf-msg">Message</label>
            <textarea
              id="cf-msg"
              name="message"
              rows={4}
              required
              placeholder="Tell me about the role or project…"
              value={form.message}
              onChange={set("message")}
            />
          </div>
          {state.message && (
            <div className={state.ok ? "cf-sent" : "cf-error"}>
              {state.message}
            </div>
          )}
          <button className="cf-submit" type="submit" disabled={isPending}>
            {isPending ? (
              "Sending…"
            ) : (
              <>
                Send message <span className="circle">{Ic.send()}</span>
              </>
            )}
          </button>
        </form>

        <div className="cf-side reveal">
          <h3>Prefer something direct?</h3>
          <p>
            Drop a line and I&apos;ll get back within a day. I&apos;m open to
            senior full-stack and AI-engineering roles.
          </p>
          <div className="cf-direct">
            <a href={`mailto:${identity.email}`}>
              <span className="lbl">Email</span>
              {identity.email}
              <span className="ar">{Ic.arrow()}</span>
            </a>
            <a href={`tel:${identity.phone}`}>
              <span className="lbl">Phone</span>
              +977 {identity.phone}
              <span className="ar">{Ic.arrow()}</span>
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lbl">LinkedIn</span>
              in/abhishek-mahato
              <span className="ar">{Ic.arrow()}</span>
            </a>
            <a href={identity.github} target="_blank" rel="noopener noreferrer">
              <span className="lbl">GitHub</span>
              @abhishek-mahato0
              <span className="ar">{Ic.arrow()}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <span>
          © 2026 Abhishek Mahato — engineered with clean code &amp; coffee ☕
        </span>
        <span style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <span>Kathmandu {clock || "--:--:--"} · UTC+5:45</span>
          <a className="to-top" href="#top">
            Back to top ↑
          </a>
        </span>
      </div>
    </footer>
  );
}
