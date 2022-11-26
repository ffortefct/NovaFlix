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
                        let pageLoc = null
                        if (contentAttrs.category == 'series') {
                            pageLoc = 'seriesPage.html'
                        }
                        else {
                            pageLoc = 'movieAndDocumentaryPage.html'
                        }

                        items += 
                        `
                        <div class="col">
                            <div class="card border-0 bg-dark">
                                <div class="card-img-bg-color">
                                    <a href="${pageLoc}?name=${contentAttrs.name}">
                                        <img class="img-fluid rounded-5 h-100 w-100 card-img-top" alt="" src="../images/content/${contentAttrs.category}/${contentAttrs.landscape}">
                                    </a>
                                </div>
                                <p class="ms-4 mt-2 text-white" style="margin-bottom: 0px;"><b>${contentAttrs.name}</b></p>
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