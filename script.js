let bundeslaender = [];
let letter = [];

async function init(){
    let resp = await fetch('./bundesland.json');    
    bundeslaender = await resp.json();
    console.log(bundeslaender);
    render();
}

async function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < bundeslaender.length; i++) {
        let name = bundeslaender[i]['name'];
        let population = bundeslaender[i]['population'];
        content.innerHTML += LandContainer(name, population);
    }
}


