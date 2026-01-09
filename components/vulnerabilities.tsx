import { AlertCircle, Bug, Lock, Zap } from "lucide-react"

const vulnerabilities = [
  {
    title: "SQL Injection",
    severity: "Critical",
    icon: AlertCircle,
    color: "text-red-400",
  },
  {
    title: "XSS (Stored & Reflected)",
    severity: "Critical",
    icon: Zap,
    color: "text-red-400",
  },
  {
    title: "CSRF Attacks",
    severity: "High",
    icon: Lock,
    color: "text-orange-400",
  },
  {
    title: "Broken Authentication",
    severity: "Critical",
    icon: AlertCircle,
    color: "text-red-400",
  },
  {
    title: "Security Misconfigurations",
    severity: "High",
    icon: Bug,
    color: "text-orange-400",
  },
  {
    title: "Missing CSP Headers",
    severity: "Medium",
    icon: Lock,
    color: "text-yellow-400",
  },
  {
    title: "Insecure Deserialization",
    severity: "High",
    icon: Zap,
    color: "text-orange-400",
  },
  {
    title: "Outdated Dependencies",
    severity: "Medium",
    icon: Bug,
    color: "text-yellow-400",
  },
]

export default function Vulnerabilities() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Detects All{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              OWASP Top Issues
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive vulnerability detection that covers the most critical security threats
          </p>
        </div>

        {/* Vulnerabilities grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {vulnerabilities.map((vuln, i) => {
            const Icon = vuln.icon
            const severityColor =
              vuln.severity === "Critical"
                ? "bg-red-500/10 border-red-500/30 text-red-400"
                : vuln.severity === "High"
                  ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                  : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"

            return (
              <div
                key={i}
                className={`p-4 rounded-lg border ${severityColor} hover:shadow-lg hover:shadow-current/20 transition-all`}
              >
                <div className="flex items-start justify-between mb-2">
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-bold px-2 py-1 rounded bg-current/20">{vuln.severity}</span>
                </div>
                <h3 className="font-bold text-white text-sm">{vuln.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
