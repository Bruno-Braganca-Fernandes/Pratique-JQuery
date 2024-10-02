
$(".list-item-input").on('submit', function (e) {
    e.preventDefault()
    const task = $(".todo-input").val()
    if (task.trim() !== '') {
        const newListItem = $("<li></li>")
        const taskTextDiv = $(`<div class="todo-item-text">${task}</div>`);
        const buttonsDiv = $('<div class="action-buttons hide"></div>')

        const finishButton = $(`<button class="finish-todo">Completar</button>`).appendTo(buttonsDiv)
        const editButton = $(`<button class="edit-todo">Editar</button>`).appendTo(buttonsDiv)
        const removeButton = $(`<button class="remove-todo">Remover</button>`).appendTo(buttonsDiv)

        buttonsDiv.append(finishButton, editButton, removeButton)
        newListItem.append(taskTextDiv, buttonsDiv)
        $(`.todo-list`).append(newListItem)
        $(".todo-input").val('')
    }
})

$(".todo-list").on('click', '.todo-item-text', function () {
    $(this).siblings('.action-buttons').toggleClass('hide');
});


$(".todo-list").on('click', '.finish-todo', function () {
    $(this).closest('li').find('.todo-item-text').toggleClass('completed');
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
    const saveButton = $('<button class="save-edit">Salvar</button>');

    listItem.empty().append(editLabel, editInput, saveButton);
    editInput.focus();
})

$(".todo-list").on('click', '.save-edit', function () {

    const listItem = $(this).parent()
    const updatedTask = listItem.find('.edit-input').val()

    const taskTextDiv = $(`<div class="todo-item-text">${updatedTask}</div>`);
    const buttonsDiv = $('<div class="action-buttons"></div>');

    const finishButton = $(`<button class="finish-todo">Completar</button>`);
    const editButton = $(`<button class="edit-todo">Editar</button>`);
    const removeButton = $(`<button class="remove-todo">Remover</button>`);

    buttonsDiv.append(finishButton, editButton, removeButton);

    listItem.empty().append(taskTextDiv, buttonsDiv);
})