import axios from 'axios'
export function request(config) {
  const instance=axios.create({
    baseURL:'http://127.0.0.1:8000',
    timeout:5000//毫秒,超过五秒钟报错，没有获取到
  })

  //请求拦截
  instance.interceptors.request.use(config=>{
    return config
  },
    error => {console.log(error)
  })

  //响应拦截
  instance.interceptors.response.use(res=>{
    return res.data.data
  },error => {console.log(error)})
  //发送真正的网络请求
  return instance(config)
}
