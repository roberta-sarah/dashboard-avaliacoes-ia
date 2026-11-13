import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { avaliacoes } from "@/data/avaliacoes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Painel de Avaliações de Delivery com IA" },
      { name: "description", content: "Dashboard de avaliações de delivery classificadas automaticamente com n8n e API do Claude." },
      { property: "og:title", content: "Painel de Avaliações de Delivery com IA" },
      { property: "og:description", content: "Problemas, urgência e sentimento das avaliações de delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const URG_LABEL: Record<string, string> = { baixa: "Baixa", media: "Média", alta: "Alta" };
const URG_COLOR: Record<string, string> = { baixa: "var(--success)", media: "var(--warning)", alta: "var(--destructive)" };
const SENT_COLOR = { positivo: "var(--success)", misto: "var(--warning)", negativo: "var(--destructive)" };
const fmt = (s: string) => s.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());

function Card({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-xl border border-border bg-card p-5 shadow-sm ${className}`}>
      <h2 className="mb-4 text-sm font-semibold text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}

function Index() {
  const [rest, setRest] = useState("todos");
  const [urg, setUrg] = useState("todas");
  const total = avaliacoes.length;
  const neg = avaliacoes.filter((a) => a.sentimento === "negativo").length;
  const alta = avaliacoes.filter((a) => a.urgencia === "alta").length;
  const restaurantes = [...new Set(avaliacoes.map((a) => a.restaurante))].sort();

  const problemas = useMemo(() => {
    const c: Record<string, number> = {};
    avaliacoes.forEach((a) => a.problemas.forEach((p) => (c[p] = (c[p] || 0) + 1)));
    return Object.entries(c).map(([k, v]) => ({ nome: fmt(k), total: v })).sort((a, b) => b.total - a.total);
  }, []);
  const urgencia = ["baixa", "media", "alta"].map((u) => ({ key: u, nome: URG_LABEL[u], total: avaliacoes.filter((a) => a.urgencia === u).length }));
  const sentimento = restaurantes.map((r) => {
    const l = avaliacoes.filter((a) => a.restaurante === r);
    return { nome: r, positivo: l.filter((a) => a.sentimento === "positivo").length, misto: l.filter((a) => a.sentimento === "misto").length, negativo: l.filter((a) => a.sentimento === "negativo").length };
  });
  const filtradas = avaliacoes.filter((a) => (rest === "todos" || a.restaurante === rest) && (urg === "todas" || a.urgencia === urg));
  const sel = "rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Delivery · IA</p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">Painel de Avaliações de Delivery com IA</h1>
          <p className="mt-2 text-muted-foreground">Avaliações classificadas automaticamente por problema, sentimento e urgência.</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Total de avaliações", String(total), "text-foreground"],
            ["Avaliações negativas", `${Math.round((neg / total) * 100)}%`, "text-destructive"],
            ["Urgência alta", String(alta), "text-destructive"],
          ].map(([t, v, c]) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm text-muted-foreground">{t}</p>
              <p className={`mt-2 text-4xl font-bold ${c}`}>{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card title="Problemas mais frequentes" className="lg:col-span-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={problemas} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                <XAxis type="number" allowDecimals={false} fontSize={12} />
                <YAxis type="category" dataKey="nome" width={130} fontSize={12} />
                <Tooltip />
                <Bar dataKey="total" name="Ocorrências" fill="var(--primary)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          <Card title="Distribuição de urgência">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={urgencia} dataKey="total" nameKey="nome" innerRadius={60} outerRadius={100} paddingAngle={3} label>
                  {urgencia.map((u) => <Cell key={u.key} fill={URG_COLOR[u.key]} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card title="Sentimento por restaurante" className="mt-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sentimento}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="nome" fontSize={12} interval={0} tick={{ fontSize: 11 }} />
              <YAxis allowDecimals={false} fontSize={12} />
              <Tooltip />
              <Legend />
              <Bar dataKey="positivo" name="Positivo" stackId="s" fill={SENT_COLOR.positivo} />
              <Bar dataKey="misto" name="Misto" stackId="s" fill={SENT_COLOR.misto} />
              <Bar dataKey="negativo" name="Negativo" stackId="s" fill={SENT_COLOR.negativo} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Todas as avaliações" className="mt-4">
          <div className="mb-4 flex flex-wrap gap-3">
            <select aria-label="Filtrar por restaurante" className={sel} value={rest} onChange={(e) => setRest(e.target.value)}>
              <option value="todos">Todos os restaurantes</option>
              {restaurantes.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <select aria-label="Filtrar por urgência" className={sel} value={urg} onChange={(e) => setUrg(e.target.value)}>
              <option value="todas">Todas as urgências</option>
              {Object.entries(URG_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
            <span className="self-center text-sm text-muted-foreground">{filtradas.length} avaliações</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  {["#", "Restaurante", "Avaliação", "Problemas", "Sentimento", "Urgência", "Resumo"].map((h) => <th key={h} className="px-3 py-2 font-medium">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {filtradas.map((a) => (
                  <tr key={a.id} className={`border-b border-border align-top ${a.urgencia === "alta" ? "bg-destructive/10 border-l-4 border-l-destructive" : ""}`}>
                    <td className="px-3 py-3 text-muted-foreground">{a.id}</td>
                    <td className="px-3 py-3 font-medium whitespace-nowrap">{a.restaurante}</td>
                    <td className="px-3 py-3">{a.avaliacao}</td>
                    <td className="px-3 py-3">
                      <div className="flex flex-wrap gap-1">{a.problemas.map((p) => <span key={p} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{fmt(p)}</span>)}</div>
                    </td>
                    <td className="px-3 py-3 capitalize">{a.sentimento}</td>
                    <td className={`px-3 py-3 font-semibold ${a.urgencia === "alta" ? "text-destructive" : ""}`}>{URG_LABEL[a.urgencia]}</td>
                    <td className="px-3 py-3 text-muted-foreground">{a.resumo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        Dados fictícios · Classificação feita com n8n + API do Claude ·{" "}
        <a href="https://github.com/roberta-sarah/classificador-avaliacoes-ia" target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">Ver no GitHub</a>
      </footer>
    </div>
  );
}
