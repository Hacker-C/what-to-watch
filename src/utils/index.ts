export const formatDate = (date: string) => {
  const [y, m, d] = date.split('-').map(i => i.startsWith('0') ? i.slice(1) : i)
  return `${y}年${m}月${d}日`
}
