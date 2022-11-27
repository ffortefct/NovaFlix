function genFilms() {
    const results = document.getElementById('favs-results')

    let content = localStorage.getItem("favs-list-ipm2022");

    if (content === null) {
        let msg = '<h3 class="text-white ms-1 mt-5">Ainda não adicionaste nada à tua lista!</h3>'
        results.insertAdjacentHTML('beforeend', msg);
    }
    else {
        let names = content.split(',')
        fetch(location.href.split('html')[0] + 'data/content.json')
        .then((response) => response.json())
        .then((json) => {
                let items = ''
                for (let i = 0; i < names.length; i++) {
                    let item = json[names[i]]
                    let pageLoc = null
                    if (item.category == 'series') {
                        pageLoc = 'seriesPage.html'
                    }
                    else {
                        pageLoc = 'movieAndDocumentaryPage.html'
                    }
                    items += `
                    <div class="col" style="order;">
                        <div class="card border-0 bg-dark">
                            <div class="card-img-bg-color">
                                <a href="${pageLoc}?name=${item.name}">
                                    <img class="img-fluid rounded-5 h-100 w-100 card-img-top" alt="" src="../images/content/${item.category}/${item.landscape}">
                                </a>
                            </div>
                            <p class="ms-4 mt-2 text-white" style="margin-bottom: 0px;"><b>${item.name}</b></p>
                        </div>  
                    </div>
                    ` 
                }
                let msg = `<div class="row row-cols-5 ms-1 mt-5">${items}</div>`
                results.insertAdjacentHTML('beforeend', msg);
        });
    }
}

genFilms()

function sortByEvaluation() {
    const results = document.getElementById('favs-results')

    let content = localStorage.getItem("favs-list-ipm2022");

    if (content === null) {
        return;
    }
    else {
        let names = content.split(',')
        fetch(location.href.split('html')[0] + 'data/content.json')
        .then((response) => response.json())
        .then((json) => {
            let items = ''

            let itemsObjs = []
            for (let i = 0; i < names.length;  i++) {
                itemsObjs.push(json[names[i]])
            }

            itemsObjs.sort(
                (it1, it2) => it1.evaluation > it2.evaluation ? -1 : 1);

            for (let i = 0; i < itemsObjs.length; i++) {
                let item = itemsObjs[i]
                let pageLoc = null
                if (item.category == 'series') {
                    pageLoc = 'seriesPage.html'
                }
                else {
                    pageLoc = 'movieAndDocumentaryPage.html'
                }
                items += `
                <div class="col" style="order;">
                    <div class="card border-0 bg-dark">
                        <div class="card-img-bg-color">
                            <a href="${pageLoc}?name=${item.name}">
                                <img class="img-fluid rounded-5 h-100 w-100 card-img-top" alt="" src="../images/content/${item.category}/${item.landscape}">
                            </a>
                        </div>
                        <p class="ms-4 mt-2 text-white" style="margin-bottom: 0px;"><b>${item.name}</b></p>
                    </div>  
                </div>
                ` 
            }

            let msg = `<div class="row row-cols-5 ms-1 mt-5">${items}</div>`
            results.innerHTML = msg;
        });
    }
}

function sortByViews() {
    const results = document.getElementById('favs-results')

    let content = localStorage.getItem("favs-list-ipm2022");

    if (content === null) {
        return;
    }
    else {
        let names = content.split(',')
        fetch(location.href.split('html')[0] + 'data/content.json')
        .then((response) => response.json())
        .then((json) => {
            let items = ''

            let itemsObjs = []
            for (let i = 0; i < names.length;  i++) {
                itemsObjs.push(json[names[i]])
            }

            itemsObjs.sort(
                (it1, it2) => it1.views > it2.views ? -1 : 1);

            for (let i = 0; i < itemsObjs.length; i++) {
                let item = itemsObjs[i]
                let pageLoc = null
                if (item.category == 'series') {
                    pageLoc = 'seriesPage.html'
                }
                else {
                    pageLoc = 'movieAndDocumentaryPage.html'
                }
                items += `
                <div class="col">
                    <div class="card border-0 bg-dark">
                        <div class="card-img-bg-color">
                            <a href="${pageLoc}?name=${item.name}">
                                <img class="img-fluid rounded-5 h-100 w-100 card-img-top" alt="" src="../images/content/${item.category}/${item.landscape}">
                            </a>
                        </div>
                        <p class="ms-4 mt-2 text-white" style="margin-bottom: 0px;"><b>${item.name}</b></p>
                    </div>  
                </div>
                ` 
            }

            let msg = `<div class="row row-cols-5 ms-1 mt-5">${items}</div>`
            results.innerHTML = msg;
        });
    }
}

function sortByTrends() {
    const results = document.getElementById('favs-results')

    let content = localStorage.getItem("favs-list-ipm2022");

    if (content === null) {
        return;
    }
    else {
        let names = content.split(',')
        fetch(location.href.split('html')[0] + 'data/content.json')
        .then((response) => response.json())
        .then((json) => {
            let items = ''

            let itemsObjs = []
            for (let i = 0; i < names.length;  i++) {
                itemsObjs.push(json[names[i]])
            }

            itemsObjs.sort(
                (it1, it2) => it1.trends > it2.trends ? -1 : 1);

            for (let i = 0; i < itemsObjs.length; i++) {
                let item = itemsObjs[i]
                let pageLoc = null
                if (item.category == 'series') {
                    pageLoc = 'seriesPage.html'
                }
                else {
                    pageLoc = 'movieAndDocumentaryPage.html'
                }
                items += `
                <div class="col">
                    <div class="card border-0 bg-dark">
                        <div class="card-img-bg-color">
                            <a href="${pageLoc}?name=${item.name}">
                                <img class="img-fluid rounded-5 h-100 w-100 card-img-top" alt="" src="../images/content/${item.category}/${item.landscape}">
                            </a>
                        </div>
                        <p class="ms-4 mt-2 text-white" style="margin-bottom: 0px;"><b>${item.name}</b></p>
                    </div>  
                </div>
                ` 
            }

            let msg = `<div class="row row-cols-5 ms-1 mt-5">${items}</div>`
            results.innerHTML = msg;
        });
    }
}
