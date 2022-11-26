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
            
            document.getElementById('myear').innerHTML = content.ano;
            document.getElementById('mseasons').innerHTML = content.seasons.length;
            document.getElementById('rating').innerHTML = content.evaluation;
            document.getElementById('mprofile').src = "../images/content/" + content.category + "/" + content.profile;
            document.body.style.backgroundImage = `url('${"../images/content/" + content.category + "/" + content.landscape}')`;
            document.getElementById('actor1').innerHTML = content.cast[0];
            document.getElementById('actor2').innerHTML = content.cast[1];
            document.getElementById('mdescription').innerHTML = content.description;
            document.getElementById('mdirector').innerHTML = content.director;
            document.getElementById('mproducer').innerHTML = content.produtor;
            document.getElementById('mscreenwriter').innerHTML = content.argumentista;
    });
}

genSeriesDoc()