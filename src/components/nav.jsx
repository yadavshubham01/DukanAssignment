/*
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { network } from './store/atoms'
import { useEffect } from 'react'
import axios from 'axios'
export function MainApp(){
    const [networkCount ,setNetworkCount]=useRecoilState(network)
    
    useEffect(() =>{
      axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
    },[])
    return (
      <div>
        <button>Home()</button>
        <button>My network({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
        <button>Jobs({networkCount.jobs})</button>
        <button>Message({networkCount.messaging})</button>
        <button>Notifications({networkCount.notifications})</button>
        
        
        <button>Me</button>
      </div>
    )
  }
    */