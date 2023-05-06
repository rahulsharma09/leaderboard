import React from 'react'
import { userData } from '../../data'
import LeadeBoarCard from './LeadeBoarCard'
import './Leaderboard.css'

const LeaderBoard = () => {
  return (
    <div>
        <h2 className='text-center'>LeaderBoard</h2>
        <LeadeBoarCard userData={userData} />
    </div>
  )
}

export default LeaderBoard