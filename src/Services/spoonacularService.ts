const getData = async (url: string): Promise<unknown> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Request failed')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getRecipeImages = async (searchWord: string): Promise<unknown> => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=3aeb0b9c8be348fd8b735dc7ffa63eb0&query=${searchWord}`
  return getData(url)
}
