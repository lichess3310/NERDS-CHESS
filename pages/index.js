import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [username, setUsername] = useState("")
  const [chesscomId, setChesscomId] = useState("")
  const [lichessId, setLichessId] = useState("")
  const [started, setStarted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Cinematic background animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[url('/chess-bg.jpg')] bg-cover bg-center opacity-30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {!started ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full space-y-6 text-center z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">NERDS@CHESS</h1>
          <p className="text-gray-300 text-lg">Welcome challenger, what shall we call you?</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 text-white outline-none text-lg"
          />
          <input
            type="text"
            placeholder="Chess.com ID"
            value={chesscomId}
            onChange={(e) => setChesscomId(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 text-white outline-none text-lg"
          />
          <input
            type="text"
            placeholder="Lichess ID"
            value={lichessId}
            onChange={(e) => setLichessId(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 text-white outline-none text-lg"
          />
          <button
            onClick={() => setStarted(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl mt-4 text-lg font-semibold shadow-lg"
          >
            Enter the Arena
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-5xl space-y-6 z-10"
        >
          <h2 className="text-3xl font-bold mb-4">Welcome, {username}!</h2>
          <p className="text-gray-300 text-lg">
            Fetching your performance from Chess.com ({chesscomId}) and Lichess ({lichessId})...
          </p>
          {/* Placeholder for real charts and SWOT */}
          <div className="bg-gray-800 p-6 rounded-2xl text-center text-gray-400">
            Your SWOT analysis and performance charts will appear here.
          </div>
        </motion.div>
      )}
    </div>
  )
}
