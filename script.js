const TO_DO_LIST = [];
const ADD_TASK_BUTTON = document.getElementById('js-add-task');

function addTask() {
    const INPUT_ELEMENT = document.getElementById('js-task-name');
    const TASK_NAME = INPUT_ELEMENT.value;

    TO_DO_LIST.push(TASK_NAME);
    console.log(TO_DO_LIST);   
}

ADD_TASK_BUTTON.addEventListener('click', () => {
    addTask();
})
