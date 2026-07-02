import { useState } from 'react'

// Deterministic pseudo-random generator so the same Batch ID always produces
// the same reading (nice for demoing/testing without a real backend).
function hashSeed(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

function evaluateBatch(id) {
  const seed = hashSeed(id.trim().toUpperCase())
  const fat = (3.2 + (seed % 12) / 20).toFixed(1) // 3.2 - 3.75
  const snf = (8.2 + ((seed >> 2) % 10) / 20).toFixed(1) // 8.2 - 8.7
  const temp = 2 + ((seed >> 4) % 5) // 2 - 6 C
  const pass = fat >= 3.2 && snf >= 8.0 && temp <= 6
  return { fat, snf, temp, pass }
}

export default function BatchQualityChecker() {
  const [batchId, setBatchId] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  const handleCheck = () => {
    if (!batchId.trim()) {
      setError('Please enter Batch ID')
      setResult(null)
      return
    }
    setError('')
    setResult(evaluateBatch(batchId))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck()
  }

  return (
    <div className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
      <h3 className="font-heading text-2xl font-semibold text-brand-blue mb-4">
        Batch Quality Checker
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Enter a batch ID to instantly view its latest quality-control reading.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="batchId"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter Batch ID (e.g. SG-2026-0417)"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
        />
        <button
          type="button"
          onClick={handleCheck}
          className="px-6 py-3 rounded-md bg-brand-blue text-white font-medium hover:bg-brand-blueDark transition-colors"
        >
          Check
        </button>
      </div>

      {error && <p className="mt-3 text-sm text-brand-red font-medium">{error}</p>}

      {result && (
        <div
          id="batchResult"
          className="mt-6 rounded-lg border border-gray-100 bg-gray-50 p-5 animate-fadeInUp"
        >
          <h3 className={`text-lg font-bold mb-2 ${result.pass ? 'text-green-600' : 'text-brand-red'}`}>
            {result.pass ? 'PASS \u2713' : 'FAIL \u2717'}
          </h3>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <dt className="text-gray-400">Batch</dt>
              <dd className="font-semibold text-gray-800">{batchId}</dd>
            </div>
            <div>
              <dt className="text-gray-400">Fat</dt>
              <dd className="font-semibold text-gray-800">{result.fat}%</dd>
            </div>
            <div>
              <dt className="text-gray-400">SNF</dt>
              <dd className="font-semibold text-gray-800">{result.snf}%</dd>
            </div>
            <div>
              <dt className="text-gray-400">Temperature</dt>
              <dd className="font-semibold text-gray-800">{result.temp}&deg;C</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm font-medium text-gray-700">
            Status:{' '}
            <span className={result.pass ? 'text-green-600' : 'text-brand-red'}>
              {result.pass ? 'Approved for Distribution' : 'Held for re-inspection'}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
