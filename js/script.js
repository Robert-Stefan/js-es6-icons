/**
 * ICONS DISPLAY
 */

// Icon set (ipotetica sorgente esterna dati)
const icons = [
    { 
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    { 
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    { 
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    { 
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    { 
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    { 
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    { 
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    { 
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    { 
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

//Colors 
const colors = [
    '#001858',
    '#8bd3dd',
    '#f582ae',
];

// Icon container 
const container  = document.querySelector('.icons');
console.log(container);

// 1. printare le icone a schermo 
//printIcons(icons, container);


// 2 printare icone colorate 
const coloredIcons = colorIcons(icons, colors);
console.log(coloredIcons);
printIcons(coloredIcons, container);

// 3 Filter icons 
// A. Gen select options  
const select = document.querySelector('#type');
const types = getType(coloredIcons);
genOption(types, select);

//B. Filter on Change
select.addEventListener('change', () => {
    const selected = select.value;

    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);
    
});


/**
 * FUNCTIONS
 */

// Print icons on screen

function printIcons(icons, container) {
    // Gen il markup icone 
    let html = '';
    icons.forEach( (icon) => {
        const {family, prefix, name, color} = icon;


        html += 
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: ${color};"></i>
            <div class="title">${name}</div>
        </div>`;
    });

    //Aggiunta icone al container icons
    console.log(html);
    container.innerHTML = html;
}



// Return color icons collection by type 

function colorIcons(icons, colors) {
    const types = getType(icons)
    console.log(types);
    console.log(colors);

    // Assegnare un colore by Type ad ogni icona
    const coloredIcons = icons.map((icon) => {
        const indexType = types.indexOf(icon.type);

        return {
            ...icon,
            color: colors[indexType],
        }
    });
    return coloredIcons;
}

/**
 * Get icons type (unique)
 */

function getType(icons) {
    const types = [];
    icons.forEach((icon) => {
        if(! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });

    return types;
}

/**
 * Gen Option for filter  
 */
function genOption(types, select) {
    // gen options
    let options = '';
    types.forEach((type) => {
        options += ` <option value="${type}">${type}</option>`;
    });

    // ! non sovvrascivere all presente di default in HTML
    select.innerHTML += options;
}

/**
 * Filter icon set 
 */
function filterIcons(icons, selected) {

    if(selected === 'all') {
        return icons;
    }

    const filtered = icons.filter((icon) => {
        return icon.type === selected;
    });

    return filtered;
}