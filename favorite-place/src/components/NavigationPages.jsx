import React from 'react'

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex justify-between">
          <button className="text-purple-600">🏠</button>
          <button className="text-gray-400">🔍</button>
          <button className="text-gray-400">📊</button>
          <button className="text-gray-400">⚙️</button>
        </div>
  )
}

export default Navigation