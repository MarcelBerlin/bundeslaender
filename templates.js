function LandContainer(name, population) {
    return /*html*/ `
    <div class="bundesland">
        <h3 class="landname">${name}</h3>
        <span class="population">${population} Millionen</span>
    </div>
    `;   
}