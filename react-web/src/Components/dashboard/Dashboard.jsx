import { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance.js'


const Dashboard = () => {
  useEffect(() => {
   
    const fetchProtectedData = async () => { 
        try {
        const response = await axiosInstance.get('/protected/')
        console.log('Success fetching protected data:', response.data)
      } catch (error) {
        console.error('Error fetching protected data:', error)
      }
    }
    fetchProtectedData()
  }, [])

  return (
    <div className="text-light">Dashboard</div>
  )
}

export default Dashboard