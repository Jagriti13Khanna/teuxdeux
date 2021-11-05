const dataFetcher = async function(url = null){
    const response = await fetch(url)
    const jsonData = await response.json()
    console.log(jsonData)

    return jsonData
}

export {dataFetcher}