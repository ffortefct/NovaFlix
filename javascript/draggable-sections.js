const poss = [
    document.getElementById("pos-1"), 
    document.getElementById("pos-2"), 
    document.getElementById("pos-3"), 
    document.getElementById("pos-4")
]

// -------------- Events --------------

// 'border-top', 'border-bottom', 'border-3'

function handleDragStart(e) { 
    this.style.opacity = '0.4'; 

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    this.classList.add('border-top', 'border-bottom');
}

function handleDragLeave(e) {
    this.classList.remove('border-top', 'border-bottom');
}

function handleDragEnd(e) { 
    this.style.opacity = '1'; 

    poss.forEach(pos => pos.classList.remove('border-top', 'border-bottom'))
}

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
}

// -------------- Set/Unset events --------------


function setEvents(pos) {
    pos.addEventListener('dragstart', handleDragStart);
    pos.addEventListener('dragover', handleDragOver);
    pos.addEventListener('dragenter', handleDragEnter);
    pos.addEventListener('dragleave', handleDragLeave);
    pos.addEventListener('dragend', handleDragEnd);
    pos.addEventListener('drop', handleDrop);
}

function unsetEvents(pos) {
    pos.removeEventListener('dragstart', handleDragStart);
    pos.removeEventListener('dragover', handleDragOver);
    pos.removeEventListener('dragenter', handleDragEnter);
    pos.removeEventListener('dragleave', handleDragLeave);
    pos.removeEventListener('dragend', handleDragEnd);
    pos.removeEventListener('drop', handleDrop);
}

// -------------- Activate/Deactivate drag mode --------------

function containerDiv(pos) {
    return pos.children[0];
}

function setDragMode() {
    poss.forEach(pos => {
        setEvents(pos)
        containerDiv(pos).classList.add('dead-content')
        pos.classList.add('drag-item')
        pos.setAttribute('draggable', true)
    })
}

function unsetDragMode() {
    poss.forEach(pos => {
        unsetEvents(pos)
        pos.setAttribute('draggable', false)
        pos.classList.remove('drag-item')
        containerDiv(pos).classList.remove('dead-content')
    })
}

// by default 
unsetDragMode()

// switch
let dragMode = true;

function dragModeSwitch() {
    if (dragMode) setDragMode()
    else unsetDragMode()
    dragMode = !dragMode;
}
