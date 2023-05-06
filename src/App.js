import React from 'react'
import Leaderboard from './components/LeaderBoard/Leaderboard'
import { userData } from './data'

const App = () => {
  return (
    <div>
      <Leaderboard userData={userData} />
    </div>
  )
}

export default App