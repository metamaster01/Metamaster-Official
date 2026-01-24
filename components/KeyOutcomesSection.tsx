"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function KeyOutcomes({ data }: { data: any }) {
  const metrics = data.key_outcomes;
  const graph = data.outcome_graph;

  const chartData = graph.labels.map((label: string, i: number) => ({
    name: label,
    value: graph.values[i],
  }));

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Key Outcomes
          </h2>

          <p className="text-sm text-white/70 leading-relaxed mb-8">
            Through strategic marketing, creative execution, and continuous
            optimization, we achieved measurable business growth for the brand.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <Metric label="Traffic" value={metrics.traffic} />
            <Metric label="Leads" value={metrics.leads} />
            <Metric label="Conversion" value={metrics.conversion} />
            <Metric label="ROI" value={metrics.roi} />
          </div>
        </motion.div>

       {/* RIGHT GRAPH */}
       
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="h-[340px] rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-6 border border-white/10 shadow-[0_0_60px_-20px_rgba(168,85,247,0.4)]"
>
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={chartData}>
      
      {/* Soft grid */}
      <defs>
        <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <XAxis
        dataKey="name"
        stroke="#aaa"
        tick={{ fill: "#aaa", fontSize: 12 }}
        axisLine={false}
      />
      <YAxis
        stroke="#aaa"
        tick={{ fill: "#aaa", fontSize: 12 }}
        axisLine={false}
      />

      <Tooltip
        contentStyle={{
          background: "#1a012d",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          color: "#fff",
        }}
      />

      {/* ZIG ZAG LINE */}
      <Line
        type="natural"          // 🔥 THIS makes zig-zag curve
        dataKey="value"
        stroke="url(#purpleGradient)"
        strokeWidth={4}
        dot={{ r: 6, stroke: "#fff", strokeWidth: 2 }}
        activeDot={{ r: 9 }}
        filter="url(#glow)"
      />
    </LineChart>
  </ResponsiveContainer>
</motion.div>
      </div>
    </section>
  );
}

function Metric({ label, value }: any) {
  return (
    <div className="rounded-xl bg-white/5 p-4 border border-white/10">
      <p className="text-xs text-white/50">{label}</p>
      <p className="text-xl font-semibold text-purple-400">
        {value}
      </p>
    </div>
  );
}