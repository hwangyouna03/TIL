function RemoveValue() {

    let N = [1, 2, 2, 4, 5];
    let result = N.filter((element, index) => {
        return N.indexOf(element) === index;
    
    });
    
    document.write(result);
    
}RemoveValue();