function genFilms() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    document.getElementById('category-name').innerHTML = params.category;

    const results = document.getElementById('series-results')

    fetch(location.href.split('html')[0] + 'data/content.json')
    .then((response) => response.json())
    .then((json) => {
        let items = ''

        let itemsObjs = []
        for (let key in json) {
            let obj = json[key]
            if (obj.category == 'series') {
                itemsObjs.push(obj)
            }
        }

        for (let i = 0; i < itemsObjs.length; i++) {
            let item = itemsObjs[i]
            let pageLoc = 'seriesPage.html'
            items += `
            <div class="col mb-3">
                <div class="card border-0 bg-dark">
                    <div class="card-img-bg-color">
                        <a href="${pageLoc}?name=${item.name}">
                            <img class="img-fluid rounded-5 card-img-top" alt="ex1" src="../images/content/series/${item.landscape}">
                        </a>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8 me-4">
                            <div class="row row-cols-1">
                                <div class="col">
                                    <span class="ms-4 text-white" style="margin-bottom: 0px;"><b>${item.name}</b></span>
                                </div>
                                <div class="col">
                                    <p class="ms-4 text-white" style="opacity: 0.5;">
                                        <b>${item.ano}</b> ● <b>${item.duration} minutos</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" onclick="addToList('${item.name}')" class="btn btn-dark" style="transform: translate(0, 10%); scale: 1.3;">
                                <b><i class="bi bi-folder-plus"></i></b>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            ` 
        }
        results.innerHTML = items;
    });
}

genFilms()

function sortByName() {
    const results = document.getElementById('series-results')

    fetch(location.href.split('html')[0] + 'data/content.json')
    .then((response) => response.json())
    .then((json) => {
        let items = ''

        let itemsObjs = []
        for (let key in json) {
            let obj = json[key]
            if (obj.category == 'series') {
                itemsObjs.push(obj)
            }
        }

        itemsObjs.sort((it1, it2) => it1.name.localeCompare(it2.name))

        for (let i = 0; i < itemsObjs.length; i++) {
            let item = itemsObjs[i]
            let pageLoc = 'seriesPage.html'
            items += `
            <div class="col mb-3">
                <div class="card border-0 bg-dark">
                    <div class="card-img-bg-color">
                        <a href="${pageLoc}?name=${item.name}">
                            <img class="img-fluid rounded-5 card-img-top" alt="ex1" src="../images/content/series/${item.landscape}">
                        </a>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8 me-4">
                            <div class="row row-cols-1">
                                <div class="col">
                                    <span class="ms-4 text-white" style="margin-bottom: 0px;"><b>${item.name}</b></span>
                                </div>
                                <div class="col">
                                    <p class="ms-4 text-white" style="opacity: 0.5;">
                                        <b>${item.ano}</b> ● <b>${item.duration} minutos</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" onclick="addToList('${item.name}')" class="btn btn-dark" style="transform: translate(0, 10%); scale: 1.3;">
                                <b><i class="bi bi-folder-plus"></i></b>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            ` 
        }
        results.innerHTML = items;
    });
}

function sortByPremiere() {
    const results = document.getElementById('series-results')

    fetch(location.href.split('html')[0] + 'data/content.json')
    .then((response) => response.json())
    .then((json) => {
        let items = ''

        let itemsObjs = []
        for (let key in json) {
            let obj = json[key]
            if (obj.category == 'series') {
                itemsObjs.push(obj)
            }
        }

        itemsObjs.sort((it1, it2) => it1.ano > it2.ano ? -1 : 1)

        for (let i = 0; i < itemsObjs.length; i++) {
            let item = itemsObjs[i]
            let pageLoc = 'seriesPage.html'
            items += `
            <div class="col mb-3">
                <div class="card border-0 bg-dark">
                    <div class="card-img-bg-color">
                        <a href="${pageLoc}?name=${item.name}">
                            <img class="img-fluid rounded-5 card-img-top" alt="ex1" src="../images/content/series/${item.landscape}">
                        </a>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8 me-4">
                            <div class="row row-cols-1">
                                <div class="col">
                                    <span class="ms-4 text-white" style="margin-bottom: 0px;"><b>${item.name}</b></span>
                                </div>
                                <div class="col">
                                    <p class="ms-4 text-white" style="opacity: 0.5;">
                                        <b>${item.ano}</b> ● <b>${item.duration} minutos</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" onclick="addToList('${item.name}')" class="btn btn-dark" style="transform: translate(0, 10%); scale: 1.3;">
                                <b><i class="bi bi-folder-plus"></i></b>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            ` 
        }
        results.innerHTML = items;
    });
}

function sortByPopularity() {
    const results = document.getElementById('series-results')

    fetch(location.href.split('html')[0] + 'data/content.json')
    .then((response) => response.json())
    .then((json) => {
        let items = ''

        let itemsObjs = []
        for (let key in json) {
            let obj = json[key]
            if (obj.category == 'series') {
                itemsObjs.push(obj)
            }
        }

        itemsObjs.sort((it1, it2) => it1.evaluation > it2.evaluation ? -1 : 1)

        for (let i = 0; i < itemsObjs.length; i++) {
            let item = itemsObjs[i]
            let pageLoc = 'seriesPage.html'
            items += `
            <div class="col mb-3">
                <div class="card border-0 bg-dark">
                    <div class="card-img-bg-color">
                        <a href="${pageLoc}?name=${item.name}">
                            <img class="img-fluid rounded-5 card-img-top" alt="ex1" src="../images/content/series/${item.landscape}">
                        </a>
                    </div>
                    <div class="row mt-2">
                        <div class="col-8 me-4">
                            <div class="row row-cols-1">
                                <div class="col">
                                    <span class="ms-4 text-white" style="margin-bottom: 0px;"><b>${item.name}</b></span>
                                </div>
                                <div class="col">
                                    <p class="ms-4 text-white" style="opacity: 0.5;">
                                        <b>${item.ano}</b> ● <b>${item.duration} minutos</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" onclick="addToList('${item.name}')" class="btn btn-dark" style="transform: translate(0, 10%); scale: 1.3;">
                                <b><i class="bi bi-folder-plus"></i></b>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            ` 
        }
        results.innerHTML = items;
    });
}
