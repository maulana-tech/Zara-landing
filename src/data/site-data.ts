export const DASHBOARD_URL = import.meta.env.PUBLIC_DASHBOARD_URL || "http://localhost:3000";

export const stats = [
    { label: "Total Value Locked", value: "$156.8K", change: "+5.2%", positive: true },
    { label: "Current APY", value: "18.7%", change: "+1.3%", positive: true },
    { label: "Risk Score", value: "42/100", change: "-3pts", positive: true },
    { label: "Active Agents", value: "3/3", change: "47 rebalances", positive: true },
];

export const pillars = [
    { icon: "\u2B21", title: "Integrate", desc: "AsterDEX Earn as primary yield source and default execution engine", color: "#D4A76A" },
    { icon: "\u25EB", title: "Stack", desc: "Composable yield stacking via PancakeSwap LPs and multi-layer strategies", color: "#E8C888" },
    { icon: "\u2699", title: "Automate", desc: "100% programmatic \u2014 no manual buttons, multisig, or off-chain triggers", color: "#00D084" },
    { icon: "\u26CA", title: "Protect", desc: "Non-custodial, no admin keys \u2014 smart contracts as sole authority", color: "#FFB800" },
];

export const agents = [
    {
        name: "Market Analyst",
        role: "AI Prediction Engine",
        status: "online",
        accuracy: 87,
        metrics: [
            { label: "Sentiment", value: "+0.75" },
            { label: "Whale Activity", value: "Accumulating" },
            { label: "Volatility", value: "Medium" },
            { label: "Confidence", value: "85%" },
        ],
    },
    {
        name: "Risk Manager",
        role: "Risk Calculation & Hedging",
        status: "online",
        accuracy: 94,
        metrics: [
            { label: "Risk Score", value: "42/100" },
            { label: "Hedge Ratio", value: "65%" },
            { label: "Drawdown", value: "-1.2%" },
            { label: "Correlation", value: "0.35" },
        ],
    },
    {
        name: "Execution Agent",
        role: "Atomic Execution & MEV Protection",
        status: "online",
        accuracy: 96,
        metrics: [
            { label: "Success Rate", value: "96%" },
            { label: "Gas Saved", value: "72%" },
            { label: "MEV Protected", value: "$12.4K" },
            { label: "Avg Slippage", value: "0.08%" },
        ],
    },
];

export const strategies = [
    {
        name: "Safe Harbor",
        protocol: "AsterDEX",
        apy: "8.5%",
        tvl: "$12.4M",
        risk: "Low",
        riskColor: "#00D084",
        icon: "~",
        breakdown: [
            { label: "Base Yield", value: 5.0, pct: 59 },
            { label: "Staking Rewards", value: 2.5, pct: 29 },
            { label: "Auto-Compound", value: 1.0, pct: 12 },
        ],
    },
    {
        name: "Yield Maximizer",
        protocol: "AsterDEX + PancakeSwap",
        apy: "18.5%",
        tvl: "$8.7M",
        risk: "Medium",
        riskColor: "#FFB800",
        icon: "^",
        breakdown: [
            { label: "Base Yield", value: 8.0, pct: 43 },
            { label: "Farm Rewards", value: 7.0, pct: 38 },
            { label: "Perp Funding", value: 3.5, pct: 19 },
        ],
    },
    {
        name: "Alpha Seeker",
        protocol: "AsterDEX Perp",
        apy: "31.5%",
        tvl: "$3.2M",
        risk: "High",
        riskColor: "#FF4D4D",
        icon: "//",
        breakdown: [
            { label: "Perp Trading", value: 15.0, pct: 48 },
            { label: "Arbitrage", value: 10.5, pct: 33 },
            { label: "Funding Rates", value: 6.0, pct: 19 },
        ],
    },
    {
        name: "Stable Shield",
        protocol: "AsterDEX",
        apy: "6.8%",
        tvl: "$24.6M",
        risk: "Low",
        riskColor: "#00D084",
        icon: "[]",
        breakdown: [
            { label: "Lending APR", value: 4.2, pct: 62 },
            { label: "USDF Incentive", value: 1.8, pct: 26 },
            { label: "Insurance Fund", value: 0.8, pct: 12 },
        ],
    },
];

export const flowSteps = [
    { num: "01", title: "Market Analyst", desc: "AI collects sentiment, tracks whales, predicts volatility, generates ZK proof", icon: "MA" },
    { num: "02", title: "Risk Manager", desc: "Verifies ZK proof, calculates risk score, determines hedge ratio", icon: "RM" },
    { num: "03", title: "Execution Agent", desc: "Builds execution plan, applies MEV protection, executes atomic batch", icon: "EA" },
    { num: "04", title: "Orchestrator", desc: "Updates vault state, emits events, schedules next autonomous cycle", icon: "OR" },
];
