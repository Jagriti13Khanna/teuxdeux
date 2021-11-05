import makeElement from "../../utils/makeElement";

const tagline = function (phrase = `tagline`, className = `ui-tagline`){
    const template = `<p class="${className}">${phrase}</h1>`
    const element = makeElement(template)

    return element
}

export default tagline
