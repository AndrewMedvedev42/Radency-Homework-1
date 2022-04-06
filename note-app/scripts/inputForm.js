const addNoteForm = document.querySelector('#add-note-form')

const getMentionedDates = (text) => {
    const dayMonthYearRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    return text.replace(/[^a-zA-Z0-9-/\ ]/g, "").split(" ").filter(item=>item.match(dayMonthYearRegex))
}

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