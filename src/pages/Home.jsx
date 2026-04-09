import { features } from "../data/features"
import FeatureCard from "../components/FeatureCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-6">
      <nav className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
        <span className="text-xl font-medium">🧵 VastraVeda</span>
        <span className="text-sm text-zinc-400">15 Features</span>
      </nav>
      <h1 className="text-2xl font-medium mb-2">Explore Features</h1>
      <p className="text-sm text-zinc-400 mb-6">Click any card to see details</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map(f => (
          <FeatureCard key={f.id} feature={f} />
        ))}
      </div>
    </div>
  )
}