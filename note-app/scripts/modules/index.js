export const getMentionedDates = (text) => {
    const dayMonthYearRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    return text.replace(/[^a-zA-Z0-9-/\ ]/g, "").split(" ").filter(item=>item.match(dayMonthYearRegex))
}

export function setArhciveFuction(id) {
    const archiveButton = document.querySelector(`#${id}archive-button`)
    let noteData = JSON.parse(localStorage.getItem(id))
    archiveButton.onclick = function () {
       noteData.archived = !noteData.archived
       localStorage.setItem(id, JSON.stringify(noteData));
       window.location.reload();
    }
}

export function setDeleteFunction(id){
    const deleteButton = document.querySelector(`#${id}delete-button`)
    deleteButton.onclick = function () {
        localStorage.removeItem(id)
        window.location.reload();
    }
};