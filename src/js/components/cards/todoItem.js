import makeElement from '../../utils/makeElement';

const todoItem = function ({ id, title, category, endDate, endTime, isComplete }) {
	const template = `
    <li class="todoItem ${category}" data-key="${id}">
        <p class="item-title">${title}</p>
        <p class="category ${category}">${category} Category</p>
        <p>Due: ${endDate}, ${endTime}</p>
        <p class="is-complete">${isComplete ? 'Completed' : ''}</p>
        <div>
        <p><button class="editButton" id="editButton" data-key="${id}"> Edit </button></p>
        <p><button class="deleteButton" id="deleteButton" data-key="${id}"> Delete </button></p>
        </div>
    </li>
    `;

	return makeElement(template);
};

export { todoItem };
