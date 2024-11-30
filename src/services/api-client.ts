import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5d3f724e93a4485e86d8c80852046d0e'
  }
})