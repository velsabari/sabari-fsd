let obj1 = {name:"Sabari",Age:"22"};
let obj2 = {Age:"22",name:"Sabari",};
let isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}
console.log( isEqualsJson(obj1,obj2));
