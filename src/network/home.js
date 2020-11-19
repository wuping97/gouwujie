import {request} from './request'

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomedata() {
  return request({
    url:'/home/tabdata'
  })
}

export function getNew() {
  return request({
    url:'/home/homedata?type=new&page=1'
  })
}

export function getSell() {
  return request({
    url:'/home/homedata?type=sell&page=2'
  })
}
