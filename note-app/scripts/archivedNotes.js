const mainTable = document.querySelector('#main-board')
const deleteButon = document.querySelector('#delete-button')

function setArhciveFuction(id) {
    const archiveButton = document.querySelector(`#${id}archive-button`)
    let noteData = JSON.parse(localStorage.getItem(id))
    archiveButton.onclick = function () {
       noteData.archived = !noteData.archived
       localStorage.setItem(id, JSON.stringify(noteData));
       window.location.reload();
    }
}

function setDeleteFunction(id){
    const deleteButton = document.querySelector(`#${id}delete-button`)
    deleteButton.onclick = function () {
        localStorage.removeItem(id)
        window.location.reload();
    }
};

function createNoteElement({id, name, createdAt, category, text_content, datesMentioned, completed}) {
    mainTable.innerHTML += `
        <tr id="${id}">
            <th>${name}</th>
            <th>${createdAt}</th>
            <th>${category}</th>
            <th>${text_content}</th>
            <th>${datesMentioned.join(', ')}</th>
            <th>${completed ? "Completed" : "In progress"}</th>
            <th>
                <button id="${id}archive-button">Unarchive</button>
            </th>
            <th>
                <button id="${id}delete-button">Delete</button>
            </th>
        </tr>
    `
}

function renderNotes(){
    if(localStorage.length === 0){
        console.log("there is no data in local storage")
    }else{
        for(let counter = 0; counter < localStorage.length; counter++){
            let noteKey = localStorage.key(counter)
            let noteData = JSON.parse(localStorage.getItem(noteKey))
            if (noteData.archived) {
                createNoteElement(noteData)
            }
        }
        for(let counter = 0; counter < localStorage.length; counter++){
            let noteKey = localStorage.key(counter)
            let noteData = JSON.parse(localStorage.getItem(noteKey))
            if (noteData.archived) {
                setArhciveFuction(noteKey)
                setDeleteFunction(noteKey)
            }
        }
    }
}

renderNotes()