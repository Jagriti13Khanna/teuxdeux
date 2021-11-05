import makeElement from '../../utils/makeElement';

const todoList = function () {
	const template = `
    <div>
        <ul id="todoList" class="todoList">
        </ul>
    </div>

    `;

	return makeElement(template);
};

export default todoList;
