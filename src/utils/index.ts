export const formatDate = (date: string) => {
  const [y, m, d] = date.split('-').map(i => i.startsWith('0') ? i.slice(1) : i)
  return `${y}年${m}月${d}日`
}

export const getImage = (poster: string) => `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster}`

export const isContentEditableSupported = () => {
  return document.createElement('div').contentEditable !== undefined
}

export const getBase64Image = (img: HTMLImageElement) => {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(img, 0, 0, img.width, img.height)
  const dataURL = canvas.toDataURL('image/png', 0.85)
  return dataURL
  // return dataURL.replace("data:image/png;base64,", "");
}
