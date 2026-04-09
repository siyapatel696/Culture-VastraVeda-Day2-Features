import { useNavigate } from "react-router-dom"

export default function FeatureCard({ feature }) {
  const nav = useNavigate()

  return (
    <div
      onClick={() => nav(`/feature/${feature.id}`)}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 cursor-pointer hover:scale-105 hover:border-zinc-600 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{feature.icon}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
          feature.difficulty === "Easy" ? "bg-green-900 text-green-300" :
          feature.difficulty === "Hard" ? "bg-red-900 text-red-300" :
          "bg-yellow-900 text-yellow-300"
        }`}>
          {feature.difficulty}
        </span>
      </div>
      <p className="text-xs text-zinc-500 mb-1">Feature {feature.id}</p>
      <h3 className="text-sm font-medium text-white">{feature.title}</h3>
    </div>
  )
}