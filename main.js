
let tasks = ''

$("form").on('submit', function (e) {
    e.preventDefault()
    const task = $(".todo-input").val()
    const newListItem = $(`<li>${task}</li>`)
    $(`<button class="finish-todo">Marcar tarefa</button>`).appendTo(newListItem)
    $(`<button class="edit-todo">Editar tarefa</button>`).appendTo(newListItem)
    $(`<button class="remove-todo">Remover tarefa</button>`).appendTo(newListItem)
    $((`.todo-list`)).append(newListItem)
    task="aaaaaaa"
})

