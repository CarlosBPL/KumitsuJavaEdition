const test = document.querySelector("#btn");
const magic = document.querySelector("#magia");

let x = 0;

test.addEventListener("click", () => { 
    if(x == 0 ){ 
        magic.classList.remove("p");
        magic.classList.add("test");
        x++;
    } else { 
        magic.classList.add("p");
        magic.classList.remove("test");
        x--;
    }
})