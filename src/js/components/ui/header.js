import makeElement from "../../utils/makeElement"

const header = function ( 
    elementType='h1',
    className='ui-heading',
    label='ui header'
) {
    const template = `<${elementType} class="${className}" title="${title}"> ${label} </ ${elementType}>`;
    const element = makeElement(template)
    return element
}

export default header