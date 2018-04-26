import fetchJsonp from 'fetch-jsonp'
export function fetchBook (val, page, pageSize) {
  val = val || '成长' // 图书没有传入关键字 默认搜索‘成长’
  const start = page * pageSize
  const url = `https://api.douban.com/v2/book/search?q=${val}&start=${start}&count=${pageSize}`
  return fetchJsonp(url).then(res => res.json())
}

export function fetchMovie (val, page, pageSize) {
  const start = page * pageSize
  let url = ''
  // 有关键字就查询 没关键字查top250
  if (val) {
    url = `https://api.douban.com/v2/movie/search?q=${val}&start=${start}&count=${pageSize}`
  } else {
    url = `https://api.douban.com/v2/movie/top250?start=${start}&count=${pageSize}`
  }
  return fetchJsonp(url).then(res => res.json())
}

export function fetchMusic (val, page, pageSize) {
  val = val || '成长'
  const start = page * pageSize
  const url = `https://api.douban.com/v2/music/search?q=${val}&start=${start}&count=${pageSize}`
  return fetchJsonp(url).then(res => res.json())
}
