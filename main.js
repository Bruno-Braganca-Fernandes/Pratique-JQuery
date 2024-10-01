
$(".list-item-input").on('submit', function (e) {
    e.preventDefault()
    const task = $(".todo-input").val()
    if (task.trim()) {
        const newListItem = $(`<li>${task}</li>`)
        const buttonsDiv = $('<div class="action-buttons hide"></div>')

        $(`<button class="finish-todo">Completar</button>`).appendTo(buttonsDiv)
        $(`<button class="edit-todo">Editar</button>`).appendTo(buttonsDiv)
        $(`<button class="remove-todo">Remover</button>`).appendTo(buttonsDiv)

        newListItem.append(buttonsDiv)
        $(`.todo-list`).append(newListItem)
        $(".todo-input").val('')
    }
})

$(".todo-list").on('click', 'li', function () {
    const buttonsDiv = $(this).find('.action-buttons')
    buttonsDiv.toggleClass('hide')
})

$(".todo-list").on('click', '.finish-todo', function () {
    $(this).parent().parent().toggleClass('completed')
})

$(".todo-list").on('click', '.remove-todo', function () {
    $(this).parent().parent().remove()
})

$(".todo-list").on('click', '.edit-todo', function (e) {
    const listItem = $(this).parent().parent().addClass('editing')

    const currentText = listItem.contents().filter(function () {
        return this.nodeType === 3
    }).text().trim()

    const editLabel = $('<p>Edite a sua tarefa:</p>')
    const editInput = $(`<input type="text" class="edit-input" value="${currentText}"/>`)
    listItem.html(editLabel).append(editInput)
    $(`<button class="save-edit">Salvar</button>`).appendTo(listItem)
    editInput.focus()
})

$(".todo-list").on('click', '.save-edit', function () {

    const listItem = $(this).parent()
    const updatedTask = listItem.find('.edit-input').val()

    listItem.removeClass('editing')
    listItem.html(`${updatedTask}`)
    const buttonsDiv = $('<div class="action-buttons hide"></div>')
    $(`<button class="finish-todo">Marcar tarefa</button>`).appendTo(buttonsDiv)
    $(`<button class="edit-todo">Editar tarefa</button>`).appendTo(buttonsDiv)
    $(`<button class="remove-todo">Remover tarefa</button>`).appendTo(buttonsDiv)
    listItem.append(buttonsDiv)
})