import names from './names.js';
import shuffle from './shuffler.js';
import grouper from './grouper.js';

const generateGroups = () => {

    const groups = grouper(shuffle(names, 0), 6);

    for(let i = 0; i < groups.length; i++){
        const header = document.createElement('h2');
        header.innerHTML = 'Group ' + groups.indexOf(groups[i]);
        document.querySelector('#lists').append(header);

        const ul = document.createElement('ul');
        ul.setAttribute('id', 'group' + i)
        document.querySelector('#lists').append(ul);

        for(let a = 0; a < groups[a].length; a++){
            const li = document.createElement('li');
            li.innerHTML = groups[i][a];
            document.querySelector('#group' + i).append(li);
        }
    }

    console.log(groups);
}

generateGroups();