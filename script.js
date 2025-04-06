const TO_DO_LIST = [];
const ADD_TASK_BUTTON = document.getElementById('js-add-task');

function renderToDoList() {
    let toDoListHTML = '';

    TO_DO_LIST.forEach(
        (TASK_OBJECT, i) => {
            const { name, toDoDate } = TASK_OBJECT;
            const HTML = `
                <p>
                    ${name} ${toDoDate}
                    <button onclick="TO_DO_LIST.splice(${i}, 1); renderToDoList()">Delete</button>
                </p>
            `;
            toDoListHTML += HTML;
        }
    );

    document.querySelector('.js-to-do-list').innerHTML = toDoListHTML;
}

function addTask() {
    const INPUT_ELEMENT = document.getElementById('js-task-name');
    const TASK_NAME = INPUT_ELEMENT.value;
    const DATE_INPUT_ELEMENT = document.getElementById('js-to-do-date');
    const TO_DO_DATE = DATE_INPUT_ELEMENT.value;

    TO_DO_LIST.push(
        {
            name: TASK_NAME,
            toDoDate: TO_DO_DATE
        }
    );
    INPUT_ELEMENT.value = '';

    renderToDoList();
}

ADD_TASK_BUTTON.addEventListener('click', () => {
    addTask();
})
