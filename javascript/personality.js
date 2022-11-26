function genPersonality() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    
    let name = params.name
    if (name == undefined) {
        return
    } 

    fetch(location.href.split('html')[0] + 'data/personality.json')
    .then((response) => response.json())
    .then((json) => {
        let person = json[name]

        document.getElementById('pname').innerHTML = name;
        document.getElementById('ptype').innerHTML = person.type;
        document.getElementById('pfname').innerHTML = person.fullName;
        document.getElementById('pbirthday').innerHTML = person.birthday;
        document.getElementById('pbibliography').innerHTML = person.bibliography;
    });
}

genPersonality()
