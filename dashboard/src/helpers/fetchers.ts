const requestGetOptions = {
  mode: "cors",
  credentials: "include",
  method: "GET",
} as const

export const fetchGet = async (path: string) => {
  const response = await fetch(path, requestGetOptions)
  return response.json()
}

const requestPostOptions = {
  mode: "cors",
  credentials: "include",
  method: "POST",
} as const

export const fetchPost = async (path: string, body: any) => {
  const response = await fetch(path, {...requestPostOptions, body})
  return response.json()
}
