const API_URL = "https://api.waifu.im/search?";
const params ={
    included_tags: [],
    is_nsfw: true,
    many: true
}

const queryParams = new URLSearchParams(params);
const requestUrl = `${API_URL}?${queryParams}`;



async function cargarWaifus(){
    const res = await fetch(requestUrl);
    const data = await res.json()

    console.log(res)
    console.log(data)

    const imagenes = data.images

    const nsfw = imagenes.find((element) => element.is_nsfw === true)
    console.log(nsfw)

    imagenes.forEach(imagen => {
        const imgSection = document.querySelector("#main--img-section")

        const img = document.createElement("img");
        img.src = imagen.url
        const div = document.createElement("div")
        
        div.appendChild(img)
        imgSection.appendChild(div)
    });
}
cargarWaifus()

