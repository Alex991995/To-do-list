let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
        let li = document.createElement('li')

        let task  = document.createElement('span')
        task.textContent = input.value 
        task.addEventListener('dblclick', function(event) {
            let inp = document.createElement('input')
            inp.value = task.textContent
            task.textContent = ''

            inp.addEventListener('keypress', function(event) {
                if (event.key == 'Enter') {
                    task.textContent =  inp.value
                
                }
            })
            task.appendChild(inp) 
        })
        li.appendChild(task )

        let remove = document.createElement('span')
        remove.textContent = 'удалить'
        remove.classList.add('remove')
        remove.addEventListener('click', function() {
            // здесь будет код для удаления тега li из списка ul
            li.remove()
        })
        li.appendChild(remove)

        let mark  = document.createElement('span')
        mark.textContent = 'сделано'
        mark.classList.add('mark')
        mark.addEventListener('click', function() {
            li.classList.add('done')
        })
        li.appendChild(mark)

        list.appendChild(li)
		input.value  = ''
	}
});