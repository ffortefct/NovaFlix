function genSeriesDoc() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    
    let name = params.name
    if (name == undefined) {
        return
    } 

    fetch(location.href.split('html')[0] + 'data/content.json')
        .then((response) => response.json())
        .then((json) => {
            let content = json[name]

            document.getElementById('add-fav-btn').onclick = () => addToList(content.name)
            document.getElementById('trailer-name').innerHTML = content.name;
            document.getElementById('mdescription').innerHTML = content.description;
            document.getElementById('exampleModalLabel3').innerHTML = content.name;
            document.getElementById('myear').innerHTML = content.ano;
            document.getElementById('mseasons').innerHTML = content.seasons.length;
            document.getElementById('rating').innerHTML = content.evaluation;
            document.getElementById('mprofile').src = "../images/content/" + content.category + "/" + content.profile;
            document.body.style.backgroundImage = `url('${"../images/content/" + content.category + "/" + content.landscape}')`;
            document.getElementById('actor1').innerHTML = content.cast[0];
            document.getElementById('actor1').href = 'personalityPageActor.html?name=' + content.cast[0];
            document.getElementById('actor2').innerHTML = content.cast[1];
            document.getElementById('actor2').href = 'personalityPageActor.html?name=' + content.cast[1];
            document.getElementById('mdirector').innerHTML = content.director;
            document.getElementById('mdirector').href = 'personalityPageActor.html?name=' + content.director;
            document.getElementById('mproducer').innerHTML = content.produtor;
            document.getElementById('mproducer').href = 'personalityPageActor.html?name=' + content.produtor;
            document.getElementById('mscreenwriter').innerHTML = content.argumentista;
            document.getElementById('mscreenwriter').href = 'personalityPageActor.html?name=' + content.argumentista;

            let seriesTabs = document.getElementById('series-tabs');
            let tabsWithCarousel = document.getElementById('tabs-with-carousels')
            let seasons = content.seasons;
            tabsWithCarousel.innerHTML = genCarousel(1, seasons[0], true);
            seriesTabs.innerHTML = genTab(1, true);
            for (let seasonN = 2; seasonN <= seasons.length; seasonN++) {
                tabsWithCarousel.innerHTML += genCarousel(seasonN, seasons[seasonN - 1], false);
                seriesTabs.innerHTML += genTab(seasonN, false);
            }
    });
}

function genTab(n, active) {
    return `
    <li class="nav-item" role="presentation">
        <button class="nav-link ${active ? "active" : ""} text-bg-dark ms-2 me-2 shadowLayer" id="tab-${n}" data-bs-toggle="tab" data-bs-target="#tab-pane-${n}" type="button" role="tab" aria-controls="tab-pane-${n}" aria-selected="true">${n}</button>
    </li>
    `
}

function genSeasonEpisodes(episodes) {
    let carouselLines = ''
    for (let i = 0; i < episodes.length; i++) {
        function line() {
            let items = ''
            
            let j = i;
            for (; j - i < 4 && j < episodes.length; j++) {
                let episode = episodes[j]
                items += `
                <div class="col-md-3 mb-3">
                    <div class="card border-0 bg-dark">
                        <div class="card-img-bg-color">
                            <a href="#">
                                <img class="img-fluid rounded-5 h-100 w-100 card-img-top" alt="ex1" src="../images/content/series/${episode.landscape}">
                            </a>
                        </div>
                        <p class="ms-4 mt-2 text-white" style="margin-bottom: 0px;"><b>${episode.name}</b></p>
                        <p class="ms-4 text-white" style="opacity: 0.5;">
                            <b>${episode.ano}</b> ● <b>${episode.duration} minutos</b>
                        </p>
                    </div>
                </div>
                `
            }
            i = j;

            return items
        }

        carouselLines += `
        <div class="carousel-item active">
            <div class="row">
                ${line()}    
            </div>
        </div>
        `
    }

    return carouselLines
}

function genCarousel(n, episodes, active) {
    return `
    <div class="tab-pane fade show ${active ? "active" : ""} mb-5 shadowLayer" id="tab-pane-${n}" role="tabpanel" aria-labelledby="tab-${n}" tabindex="0">
        <section class="pt-5 bg-dark">
            <div id="pos-1">
                <div class="container">
                    <div class="row">
                        <div class="col-16 mb-3">
                            <button class="btn btn-dark me-3 btn-line" type="button" data-bs-target="#carousel-${n}" data-bs-slide="prev">
                                <i class="bi bi-arrow-left-circle"></i>
                            </button>
                            <button class="btn btn-dark btn-line" type="button" data-bs-target="#carousel-${n}" data-bs-slide="next">
                                <i class="bi bi-arrow-right-circle"></i>
                            </button>
                        </div>
                        <div class="col-16">
                            <div id="carousel-${n}" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    ${genSeasonEpisodes(episodes)}
                                </div>
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>
        </section>
    </div>
    `
}

genSeriesDoc()