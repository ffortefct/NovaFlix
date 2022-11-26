function addToList(name) {
    let items = localStorage.getItem("favs-list-ipm2022");
    
    if (items === null) {
        items = name
    }
    else {
        if (items.includes(name)) {
            return;
        }        
        items += `,${name}`
    }
    
    localStorage.setItem("favs-list-ipm2022", items);
}
