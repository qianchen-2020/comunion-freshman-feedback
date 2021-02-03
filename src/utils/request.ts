export async function post(url: string, body: any) {
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return resp.json()
  } catch (error) {
    return null
  }
}
