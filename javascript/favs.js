function genFavorites() {
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
                    items += 
                            `
                            <div class="col">
                                <div class="card border-0 bg-dark">
                                    <div class="card-img-bg-color">
                                        <a href="#">
                                            <img class="img-fluid rounded-5 h-100 w-100 card-img-top" alt="" src="../images/content/${item.category}/${item.landscape}">
                                        </a>
                                    </div>
                                    <p class="ms-4 mt-2 text-white" style="margin-bottom: 0px;"><b>${names[i]}</b></p>
                                </div>  
                            </div>
                            ` 
                }
                let msg = `<div class="row row-cols-5 ms-1 mt-5">${items}</div>`
                results.insertAdjacentHTML('beforeend', msg);
        });
    }
}

genFavorites()
