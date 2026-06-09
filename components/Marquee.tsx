"use client";

const rowA = [
  "TypeScript", "React", "Next.js", "Node.js", "Express",
  "GraphQL", "WebSockets", "PostgreSQL", "MongoDB", "Redis",
];
const rowB = [
  "AI Engineering", "LangChain", "RAG", "Embeddings", "Vector DBs",
  "Kafka", "Docker", "CI/CD", "System Design", "Playwright",
];

function Row({ items, dir }: { items: string[]; dir: "ltr" | "rtl" }) {
  const seq = [...items, ...items];
  return (
    <div className={`mq-row ${dir}`}>
      <div className="mq-track">
        {seq.map((it, i) => (
          <span className="chip" key={i}>
            <span className="br">&lt;</span>
            {it}
            <span className="br">/&gt;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="skills" aria-label="Tech stack">
      <div className="skills-rail" aria-hidden="true">
        <span className="sr-label mono-label">// stack.config</span>
        <span className="sr-dot" />
      </div>
      <Row items={rowA} dir="ltr" />
      <Row items={rowB} dir="rtl" />
    </section>
  );
}
