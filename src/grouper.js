const grouper = (array, size) => {
    let arrays = [];
    
    for(let i = 0; i < array.length; i+= size){
        arrays.push(array.slice(i, i+size));
    }

    return arrays;
}

export default grouper;