import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"

const performanceData = [
  { day: "Mon", rating: 1200 },
  { day: "Tue", rating: 1225 },
  { day: "Wed", rating: 1250 },
  { day: "Thu", rating: 1275 },
  { day: "Fri", rating: 1290 },
]

const swotData = [
  { subject: "Openings", A: 120, fullMark: 150 },
  { subject: "Tactics", A: 98, fullMark: 150 },
  { subject: "Strategy", A: 86, fullMark: 150 },
  { subject: "Endgames", A: 99, fullMark: 150 },
]

export default function Home() {
  const [username, setUsername] = useState("")
  const [started, setStarted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      {!started ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-4 text-center"
        >
          <h1 className="text-5xl font-extrabold mb-4">NERDS@CHESS</h1>
          <p className="text-gray-300">Welcome challenger, what shall we call you?</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none"
          />
          <button
            onClick={() => setStarted(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg mt-4 text-lg font-semibold"
          >
            Enter the Arena
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-5xl space-y-6"
        >
          <h2 className="text-3xl font-bold">Welcome, {username}!</h2>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Performance Trend</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">SWOT Analysis</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart outerRadius={90} data={swotData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar name="Player" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
