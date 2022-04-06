import { getMentionedDates } from "../scripts/modules/index.js";
const addNoteForm = document.querySelector('#add-note-form')

addNoteForm.addEventListener('submit',(event)=>{
    const noteId = "id" + Math.random().toString(16).slice(2)
    const newNoteData = {}
        newNoteData.id = noteId
        newNoteData.name = event.target.name.value
        newNoteData.archived = false
        newNoteData.completed = event.target.status.checked
        newNoteData.createdAt = `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`
        newNoteData.category = event.target.category.value
        newNoteData.text_content = event.target.text_content.value
        newNoteData.datesMentioned = getMentionedDates(event.target.text_content.value)

    localStorage.setItem(noteId, JSON.stringify(newNoteData));
})