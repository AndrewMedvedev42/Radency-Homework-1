import { getMentionedDates } from "../scripts/modules/index.js";

const nameInput = document.querySelector('#name')
const editNoteForm = document.querySelector('#edit-note-form')
const categorySelection = document.querySelector('#category')
const textContentInput = document.querySelector('#text-content')
const statusCheckbox = document.querySelector('#note-status')

function getNoteData() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const {id} = Object.fromEntries(urlSearchParams.entries());
    let noteData = JSON.parse(localStorage.getItem(id))
        nameInput.value = noteData.name
        categorySelection.value = noteData.category
        statusCheckbox.checked = noteData.completed
        textContentInput.value = noteData.text_content
}
getNoteData()

editNoteForm.addEventListener('submit',(event)=>{
    const urlSearchParams = new URLSearchParams(window.location.search);
    const {id} = Object.fromEntries(urlSearchParams.entries());
    let noteData = JSON.parse(localStorage.getItem(id))

    noteData.name = event.target.name.value
    noteData.category = event.target.category.value
    noteData.completed = event.target.status.checked
    noteData.text_content = event.target.text_content.value
    noteData.datesMentioned = getMentionedDates(event.target.text_content.value)

    localStorage.setItem(id, JSON.stringify(noteData));
})