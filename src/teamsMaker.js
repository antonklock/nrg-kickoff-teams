import {names, leads} from './names.js';
import shuffle from './shuffler.js';
import grouper from './grouper.js';

const seed = 4;
const groupSize = 6;

const generateGroups = () => {

const groups = grouper(shuffle(names, seed), groupSize);

    // for(let i = 0; i < leads.length; i++){
    //     groups[i].unshift(leads[i]);
    // }

    for(let i = 0; i < groups.length; i++){
        // GROUP HEADER
        const header = document.createElement('h2');
        header.innerHTML = 'Group ' + (i + 1);
        document.querySelector('#lists').append(header);
        
        //GROUP LIST
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'group' + i)
        document.querySelector('#lists').append(ul);

        for(let a = 0; a < groups[i].length; a++){
            const li = document.createElement('li');
            li.innerHTML = groups[i][a];
            document.querySelector('#group' + i).append(li);
        }

        document.querySelector('#group' + i).append('Antal: ' + (groups[i].length).toString());
    }
}

generateGroups();