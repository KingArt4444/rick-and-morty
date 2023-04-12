export const cutBaseUrl = (string:string) =>{

  const baseUrl = "https://rickandmortyapi.com/api"
  return string.replace(baseUrl, '')
}