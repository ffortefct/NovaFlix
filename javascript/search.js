function genSearch() {
    // get search body
    const searchBody = document.getElementById('search-results')

    // query params fetcher
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    let searchResult = params.search
    if (searchResult == undefined) {
        searchBody.insertAdjacentHTML('beforeend', '<h3 class="text-white ms-1 mt-5">Algo inesperado aconteceu!?</h3>')
        return
    }
    searchResult = searchResult.toUpperCase()

    fetch(location.href.split('html')[0] + 'data/content.json')
        .then((response) => response.json())
        .then((json) => {
            function contents() {
                let items = ''

                for (let contentName in json) {
                    let contentAttrs = json[contentName]
                    if (contentName.toUpperCase().includes(searchResult)) {
                        items += 
                        `
                        <div class="col">
                            <div class="card border-0 bg-dark">
                                <div class="card-img-bg-color">
                                    <a href="./film.html?name=${contentName}">
                                        <img class="img-fluid rounded-5 h-100 w-100 card-img-top" alt="" src="../images/content/${contentAttrs.image}">
                                    </a>
                                </div>
                                <p class="ms-4 mt-2 text-white" style="margin-bottom: 0px;"><b>${contentName}</b></p>
                            </div>  
                        </div>
                        `
                    }
                }

                return items
            }

            let results, its = contents()
            if (its != '') {
                results = `<div class="row row-cols-5 ms-1 mt-5">${its}</div>`
            }
            else {
                results = '<h3 class="text-white ms-1 mt-5">Sem resultados!</h3>'
            }

            searchBody.insertAdjacentHTML('beforeend', results)
        });
}

genSearch()