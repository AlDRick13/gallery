export const getPhotos = async () => {
    const response = await fetch("https://api.unsplash.com/search/photos/?query=fixie&per_page=25&client_id=GE9a4_VSqogceSzRn7uG54Qkgt757DT7V5paIGjspEs").then(res => res.json()); 

    return response.results
}