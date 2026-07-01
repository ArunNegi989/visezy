"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import styles from "./AnalyticsChart.module.css";

interface AnalyticsData {
  month: string;
  blogs: number;
  banners: number;
  contacts: number;
}

interface Props {
  data: AnalyticsData[];
}

function CustomTooltip({
  active,
  payload,
  label,
}: any) {
  if (
    active &&
    payload &&
    payload.length
  ) {
    return (
      <div className={styles.tooltip}>
        <h4>{label}</h4>

        <p>
          📝 Blogs
          <span>
            {payload[0].value}
          </span>
        </p>

        <p>
          🖼 Banners
          <span>
            {payload[1].value}
          </span>
        </p>

        <p>
          📩 Contact
          <span>
            {payload[2].value}
          </span>
        </p>
      </div>
    );
  }

  return null;
}

export default function AnalyticsChart({
  data,
}: Props) {
  return (
    <div className={styles.chartCard}>
      <div className={styles.header}>
        <div>
          <h3>
            Website Analytics
          </h3>

          <p>
            Last 6 Months
          </p>
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height={360}
      >
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 15,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            opacity={0.25}
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            content={<CustomTooltip />}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="blogs"
            name="Blogs"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{
              r: 4,
            }}
            activeDot={{
              r: 7,
            }}
          />

          <Line
            type="monotone"
            dataKey="banners"
            name="Hero Banners"
            stroke="#10b981"
            strokeWidth={3}
            dot={{
              r: 4,
            }}
            activeDot={{
              r: 7,
            }}
          />

          <Line
            type="monotone"
            dataKey="contacts"
            name="Contact Inquiries"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={{
              r: 4,
            }}
            activeDot={{
              r: 7,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}