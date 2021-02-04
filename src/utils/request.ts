export async function post(url: string, body: any) {
  try {
    const resp = await fetch(
      (process.env.NODE_ENV === 'development' ? 'https://comunion-freshman-feedback.vercel.app' : '') + url,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    )
    if (resp.status >= 200 && resp.status < 300) {
      return resp.json()
    }
    console.error(resp)
    alert('请求错误')
    return null
  } catch (error) {
    console.error(error)
    alert('请求错误')
    return null
  }
}
