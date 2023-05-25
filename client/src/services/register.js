import axios from 'axios'
import { baseUrl } from '../utilities/zustand'

const fullUrl = `${baseUrl}/api/users`

const register = async credentials => {
  const response = await axios.post(fullUrl, credentials)
  return response.data
}

export default register

