import { setArhciveFuction, setDeleteFunction } from "../scripts/modules/index.js";

const archivedNotesBoard = document.querySelector('#archived-notes-board')

function createNoteElement({id, name, createdAt, category, text_content, datesMentioned, completed}) {
    archivedNotesBoard.innerHTML += `
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