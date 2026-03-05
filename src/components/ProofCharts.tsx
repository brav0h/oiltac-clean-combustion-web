import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const NAVY = "#1a2633";
const ORANGE = "#f97316";
const LIGHT_GREY = "#f5f5f5";
const BORDER_GREY = "#e2e2e2";
const TEXT_GREY = "#6b7280";

const SourceNote = ({ text }: { text: string }) => (
  <p className="text-xs italic mt-3" style={{ color: TEXT_GREY }}>
    {text}
  </p>
);

const ChartTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-semibold mb-3" style={{ color: NAVY }}>
    {children}
  </p>
);

/* ── Stat Card ─────────────────────────────────────────────────────── */
interface StatCardProps {
  value: string;
  subtext: string;
  source?: string;
}
export const StatCard = ({ value, subtext, source }: StatCardProps) => (
  <div
    className="rounded-lg p-5 border text-center"
    style={{ backgroundColor: LIGHT_GREY, borderColor: BORDER_GREY }}
  >
    <p className="text-2xl font-bold leading-tight" style={{ color: ORANGE }}>
      {value}
    </p>
    <p className="text-sm mt-1" style={{ color: NAVY }}>
      {subtext}
    </p>
    {source && <SourceNote text={source} />}
  </div>
);

/* ── Horizontal bar: baseline vs treated ───────────────────────────── */
interface HorizBarProps {
  title: string;
  baselineLabel: string;
  treatedLabel: string;
  baselineValue: number;
  treatedValue: number;
  treatedNote: string;
  source: string;
}
export const HorizCompareChart = ({
  title,
  baselineLabel,
  treatedLabel,
  baselineValue,
  treatedValue,
  treatedNote,
  source,
}: HorizBarProps) => {
  const data = [
    { name: baselineLabel, value: baselineValue, isBaseline: true },
    { name: treatedLabel, value: treatedValue, isBaseline: false, note: treatedNote },
  ];

  return (
    <div className="mt-4">
      <ChartTitle>{title}</ChartTitle>
      {/* Explicit-height wrapper ensures ResponsiveContainer always has measurable dimensions */}
      <div style={{ width: "100%", height: 110 }}>
        <ResponsiveContainer width="100%" height="100%" debounce={1}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 4, right: 120, left: 8, bottom: 4 }}
          >
            <XAxis type="number" domain={[0, 105]} hide />
            <YAxis
              type="category"
              dataKey="name"
              width={90}
              tick={{ fontSize: 11, fill: "#374151" }}
            />
            <Tooltip
              formatter={(v: number) => [`${v}%`, "Relative level"]}
              contentStyle={{ fontSize: 12 }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
              {data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.isBaseline ? BORDER_GREY : NAVY}
                  stroke={BORDER_GREY}
                  strokeWidth={1}
                />
              ))}
              <LabelList
                dataKey="value"
                position="right"
                formatter={(v: number) => `${v}%`}
                style={{ fontSize: 11, fill: "#374151" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Note rendered separately since LabelList can't access row context */}
      <p className="text-xs mt-1" style={{ color: NAVY }}>
        <span className="font-medium" style={{ color: ORANGE }}>{treatedNote}</span>
      </p>
      <SourceNote text={source} />
    </div>
  );
};

/* ── Vertical bar: single or grouped with range labels ─────────────── */
interface VertBarItem {
  name: string;
  value: number;
  label: string;
  color: string;
}
interface VertBarProps {
  title: string;
  data: VertBarItem[];
  source: string;
  yLabel?: string;
  callout?: string;
}
export const VertBarChart = ({ title, data, source, yLabel, callout }: VertBarProps) => (
  <div className="mt-4">
    <ChartTitle>{title}</ChartTitle>
    {/* Explicit-height wrapper ensures ResponsiveContainer always has measurable dimensions */}
    <div style={{ width: "100%", height: 240 }}>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <BarChart data={data} margin={{ top: 28, right: 16, left: 8, bottom: 8 }}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#374151" }}
            interval={0}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: TEXT_GREY }}
            axisLine={false}
            tickLine={false}
            label={
              yLabel
                ? {
                    value: yLabel,
                    angle: -90,
                    position: "insideLeft",
                    fontSize: 10,
                    fill: TEXT_GREY,
                  }
                : undefined
            }
          />
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={52}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
            <LabelList
              dataKey="label"
              position="top"
              style={{ fontSize: 10, fill: "#374151", fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    {callout && (
      <div
        className="mt-3 rounded px-4 py-3 text-xs border-l-4"
        style={{ backgroundColor: "#fff7ed", borderLeftColor: ORANGE, color: "#374151" }}
      >
        {callout}
      </div>
    )}
    <SourceNote text={source} />
  </div>
);

/* ── Deposit comparison two-column card ────────────────────────────── */
interface DepositCardProps {
  title: string;
  withoutLabel: string;
  withLabel: string;
}
export const DepositCompareCard = ({ title, withoutLabel, withLabel }: DepositCardProps) => (
  <div className="mt-4">
    <p className="text-sm font-semibold mb-3" style={{ color: NAVY }}>
      {title}
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        className="rounded-lg p-4 border text-sm"
        style={{ backgroundColor: LIGHT_GREY, borderColor: BORDER_GREY }}
      >
        <p className="font-semibold mb-1" style={{ color: TEXT_GREY }}>
          Without OILTAC
        </p>
        <p style={{ color: "#374151" }}>{withoutLabel}</p>
      </div>
      <div
        className="rounded-lg p-4 border text-sm"
        style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}
      >
        <p className="font-semibold mb-1" style={{ color: NAVY }}>
          With OILTAC
        </p>
        <p style={{ color: "#374151" }}>{withLabel}</p>
      </div>
    </div>
  </div>
);

/* ── Stat card pair ─────────────────────────────────────────────────── */
interface StatCardPairProps {
  card1Value: string;
  card2Value: string;
  sharedSubtext: string;
  source: string;
}
export const StatCardPair = ({
  card1Value,
  card2Value,
  sharedSubtext,
  source,
}: StatCardPairProps) => (
  <div className="mt-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <StatCard value={card1Value} subtext={sharedSubtext} />
      <StatCard value={card2Value} subtext={sharedSubtext} />
    </div>
    <SourceNote text={source} />
  </div>
);
