const baseUrl = 'https://api.themoviedb.org/3'

// TODO english suport
export type Language = 'zh-CN' | 'en-US'

const baseParamsObj = {
  api_key: 'd6c41b3a8878808c898664915910d36e',
  language: 'zh-CN',
  include_adult: 'false'
}

const TIME_OUT = 5000

export const http = async (endpoint: string, paramsObj: Record<string, string> = {}) => {
  const params = new URLSearchParams({ ...baseParamsObj, ...paramsObj }).toString()
  return Promise.race([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Error('Timeout! Please check your network or proxy'))
      }, TIME_OUT)
    }),
    fetch(`${baseUrl}/${endpoint}?${params}`)
      .then(async (resp) => {
        if (resp.ok) {
          return await resp.json()
        } else {
          return Promise.reject(Error('Error happned'))
        }
      })
  ])
}
