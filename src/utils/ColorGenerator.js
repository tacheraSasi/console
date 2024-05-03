const ColorGenerator = () =>{
    const colorArray = 
        [
            '#7a82c5',
            '#82ac82',
            '#cf6b6b',
            '#cdd868',
            '#7bdde4',
            '#993f33'
        ];
    
    let index = Math.floor(Math.random() * colorArray.length)
    return colorArray[index]
}

export default ColorGenerator;