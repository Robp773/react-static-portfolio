import React from 'react'
import ActivityFeed from '../components/ActivityFeed'
import MediumFeed from '../components/MediumFeed'
import Intro from '../components/Intro'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <Intro/>
    <MediumFeed/>
    <ActivityFeed/>
  </div>
)
