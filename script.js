const TO_DO_LIST = [];
const ADD_TASK_BUTTON = document.getElementById('js-add-task');

function renderToDoList() {
    let toDoListHTML = '';

    for (let i = 0; i < TO_DO_LIST.length; i++) {
        const TASK_NAME = TO_DO_LIST[i];
        const HTML = `<p>${TASK_NAME}</p>`;
        toDoListHTML += HTML;
    }

    document.querySelector('.js-to-do-list').innerHTML = toDoListHTML;
}

function addTask() {
    const INPUT_ELEMENT = document.getElementById('js-task-name');
    const TASK_NAME = INPUT_ELEMENT.value;

    TO_DO_LIST.push(TASK_NAME);
    INPUT_ELEMENT.value = '';

    renderToDoList();
}

ADD_TASK_BUTTON.addEventListener('click', () => {
    addTask();
})
