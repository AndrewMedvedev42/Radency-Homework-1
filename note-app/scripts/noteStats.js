const statsTable = document.querySelector('#stats-board')

function getNotesStats(list, stats_list) {
    const categories = list.map(item => item.category)
        .filter((value, index, self) => self.indexOf(value) === index)
            .forEach(category=>{
                let activeNotesCount = 0
                let archivedNotesCount = 0
                list.filter(item=>category == item.category)
                    .forEach(item=>{
                        if (!item.completed) {
                            activeNotesCount++
                        }
                        if (item.archived) {
                            archivedNotesCount++
                        }
                    })
                statsTable.innerHTML += `
                <tr>
                    <th>${category}</th>
                    <th>${activeNotesCount}</th>
                    <th>${archivedNotesCount}</th>
                    </tr>`
                })
}

function renderNotesStats(){
    if(localStorage.length === 0){
        console.log("there is no data in local storage")
    }else{
        const noteDataList = []
        for(let counter = 0; counter < localStorage.length; counter++){
            let noteKey = localStorage.key(counter)
            let noteData = JSON.parse(localStorage.getItem(noteKey))
            noteDataList.push(noteData)
        }
        getNotesStats(noteDataList,)
    }
}

renderNotesStats()