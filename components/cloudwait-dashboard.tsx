'use client';

import { motion } from 'framer-motion';

const queueStats = [
  { label: 'Estimated wait', value: '12 min', change: '+2.4 min', tone: 'cyan' },
  { label: 'Confidence', value: '92%', change: '+8 pts', tone: 'emerald' },
  { label: 'Service completion', value: '3:42 PM', change: 'On target', tone: 'violet' },
  { label: 'Best time to visit', value: '1:15 PM', change: 'Lower crowd', tone: 'amber' },
];

const counterStatus = [
  { counter: 'Counter A', status: 'Open', load: 82, avg: '4 min', trend: 'steady' },
  { counter: 'Counter B', status: 'Open', load: 64, avg: '7 min', trend: 'rising' },
  { counter: 'Counter C', status: 'Paused', load: 0, avg: 'Offline', trend: 'maintenance' },
  { counter: 'Counter D', status: 'Open', load: 54, avg: '9 min', trend: 'stable' },
];

const healthCards = [
  { label: 'Queue health', value: 'Healthy', detail: 'Flow stable across peak window', percent: 82 },
  { label: 'Predictive accuracy', value: '96.4%', detail: 'Model confidence within target band', percent: 96 },
  { label: 'Peak load', value: '1.7x', detail: 'Compared to average midday demand', percent: 71 },
];

const timeline = [
  { hour: '10 AM', value: 28 },
  { hour: '11 AM', value: 43 },
  { hour: '12 PM', value: 61 },
  { hour: '1 PM', value: 76 },
  { hour: '2 PM', value: 66 },
  { hour: '3 PM', value: 58 },
  { hour: '4 PM', value: 47 },
];

const recommendations = [
  'Direct students to Counter A for faster processing during the current surge window.',
  'Visibility shows 12% fewer wait times if one additional cashier opens by 1:00 PM.',
  'Queue is trending above normal density; encourage off-peak arrival until 3:00 PM.',
];

export default function Dashboard() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow backdrop-blur"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                CloudWait AI
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Queue intelligence dashboard
              </h1>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              Live queue health: <span className="font-semibold text-white">Strong</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {queueStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                <div className="flex items-end justify-between gap-3">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className={`rounded-full bg-${stat.tone}-500/10 px-2 py-1 text-xs font-medium text-${stat.tone}-300`}>
                    {stat.change}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.header>

        <section className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Signal overview</p>
                <h2 className="mt-1 text-2xl font-bold text-white">Peak and off-peak demand</h2>
              </div>
              <div className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                AI forecast active
              </div>
            </div>

            <div className="flex h-64 items-end gap-4">
              {timeline.map((point) => (
                <div key={point.hour} className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex h-48 w-full items-end justify-center rounded-t-2xl bg-gradient-to-t from-cyan-500 via-cyan-400 to-sky-200/80 p-2" style={{ height: `${point.value}%` }}>
                    <div className="text-[10px] font-medium text-slate-950">{point.value}%</div>
                  </div>
                  <span className="text-xs text-slate-400">{point.hour}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Priority actions</p>
            <div className="mt-5 space-y-4">
              {recommendations.map((note) => (
                <div key={note} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-200">
                  {note}
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Counter status</p>
                <h2 className="mt-1 text-2xl font-bold text-white">Operational overview</h2>
              </div>
            </div>

            <div className="space-y-4">
              {counterStatus.map((counter) => (
                <div key={counter.counter} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div className="font-medium text-white">{counter.counter}</div>
                    <div className={`rounded-full px-2 py-1 text-xs font-medium ${counter.status === 'Open' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300'}`}>
                      {counter.status}
                    </div>
                  </div>
                  <div className="mb-2 h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full ${counter.status === 'Open' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400' : 'bg-slate-600'}`}
                      style={{ width: `${counter.load}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Load: {counter.load}%</span>
                    <span>Avg: {counter.avg}</span>
                    <span>{counter.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="space-y-6"
          >
            {healthCards.map((card) => (
              <div key={card.label} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{card.label}</p>
                  <span className="text-lg font-semibold text-white">{card.value}</span>
                </div>
                <div className="mb-3 h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${card.percent}%` }} />
                </div>
                <p className="text-sm text-slate-300">{card.detail}</p>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
