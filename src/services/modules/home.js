import myRequest from '../request'

export const reqmain = () => {
  return myRequest.get({
    url: '/tesla'
  })
}

export const reqshop = () => {
  return myRequest.get({
    url: '/shop'
  })
}

export const reqfind = (page) => {
  return myRequest.get({
    url: `/find/${page}`
  })
}
