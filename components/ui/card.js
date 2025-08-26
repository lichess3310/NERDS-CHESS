export function Card({ children }) {
  return <div className="rounded-2xl bg-gray-800 shadow-lg mb-4">{children}</div>
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
