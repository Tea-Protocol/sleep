/** 计时器 */
export function sleep(time: number) {
  return new Promise(res => {
    setTimeout(() => {
      res(time)
    }, time)
  })
}
