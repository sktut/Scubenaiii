import { FileText, Check } from "lucide-react"

const reportSections = [
  { title: "Executive Summary", description: "Non-technical overview for stakeholders" },
  { title: "Risk Score", description: "0-100 risk assessment of your application" },
  { title: "Detailed Findings", description: "Complete vulnerability breakdown by category" },
  { title: "Fix Instructions", description: "Developer-ready code examples and solutions" },
  { title: "Compliance Mapping", description: "OWASP, ISO, PCI-DSS alignment" },
  { title: "Recommendations", description: "Actionable next steps and best practices" },
]

export default function Report() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Security Report
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              More than just alerts. Get comprehensive, actionable intelligence that your team can actually use.
            </p>

            <div className="space-y-3">
              {reportSections.map((section, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white text-sm">{section.title}</p>
                    <p className="text-slate-400 text-xs">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Report Preview */}
          <div className="relative">
            <div className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-b from-slate-800/50 to-slate-900/50 shadow-2xl shadow-cyan-500/10">
              <div className="space-y-4">
                {/* Report header */}
                <div className="pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-bold text-slate-300">Security Report</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">example.com</h3>
                </div>

                {/* Risk score */}
                <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  <div className="text-xs text-slate-400 mb-1">Overall Risk Score</div>
                  <div className="text-3xl font-bold text-cyan-400">42</div>
                  <div className="text-xs text-slate-400 mt-1">Medium Risk</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                    <div className="text-lg font-bold text-red-400">3</div>
                    <div className="text-xs text-slate-400">Critical</div>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                    <div className="text-lg font-bold text-orange-400">7</div>
                    <div className="text-xs text-slate-400">High</div>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                    <div className="text-lg font-bold text-yellow-400">12</div>
                    <div className="text-xs text-slate-400">Medium</div>
                  </div>
                </div>

                {/* Sample issue */}
                <div className="p-3 rounded-lg border border-slate-700 bg-slate-900/30">
                  <div className="text-xs font-bold text-red-400 mb-1">🔴 CRITICAL</div>
                  <div className="text-sm font-bold text-white mb-1">Missing CSP Header</div>
                  <div className="text-xs text-slate-400">Add Content-Security-Policy to prevent XSS attacks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
