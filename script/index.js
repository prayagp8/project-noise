import nav from "../component/navbar.js"

nav()






let id;
let i=0
function slideshow(){
    let images = [
        "https://cdn.shopify.com/s/files/1/0997/6284/files/Artboard_1_11_1_1500x.png?v=1658921180",
        "https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_07_21T12_39_18_718Z_1500x.png?v=1658490960",
        "https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_07_21T12_39_18_718Z_1500x.png?v=1658490960",
        "https://cdn.shopify.com/s/files/1/0997/6284/files/Artboard_1_10_1_765x.png?v=1658745681",
        "https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_07_21T11_22_57_719Z_1_765x.png?v=1658491018"
    
    ]
    let container = document.getElementById("main");
    

    id = setInterval(function(){
        if(i===images.length){
            i=0
        }
        let img = document.createElement("img")
        img.src = images[i]
        container.innerHTML = null; //
        container.append(img)
        i++


    },2000)

}
slideshow()