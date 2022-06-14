export const getInfo = async(input) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${input}`
    const resp = await fetch(url)
    const {data} = await resp.json()
    
    const characters = data.map(res => {
      return {
        id: res.id,
        title: res.name,
        status: res.status,
        image: res.image,
      }
    })  
    return characters
  }