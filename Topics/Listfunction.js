let lst=[6, 3, 9,  4, 9]

function gen(a){
    return a>=2
} // function for using every Function

let every=[]
every=lst.every(gen)
console.log(every); // It return true because all the element should be greater than the 2

let foreach=lst.forEach((data)=>{
    console.log(data);
    
}) // It return the element one by one

let length=lst.length
console.log("Length of the List",length); // It return length of the list

let push=lst.push(56)
console.log("updated list",lst); // It insert the element as 56

let pop =lst.pop()
console.log("Delete the list of element",pop);//It delete the element as last one

