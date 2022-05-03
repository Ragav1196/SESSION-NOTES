{function urlBuilder(id, width, height) {
    return `http://picsum.photos/${id}/${width}/${height}`;
}
console.log(urlBuilder(237, 200, 300));}

{const urlBuilder =  (id, width, height) => `http://picsum.photos/${id}/${width}/${height}`;
console.log(urlBuilder(237, 200, 300));}

{const urlBuilder =  (id, width, height) => `http://picsum.photos/${id}/${width * 10}/${height}`;
console.log(urlBuilder(237, 200, 300));}

{const [a, b, c=4, d=4] = [1, 2, null]
console.log(a,b,c,d);}

{function fun({url, name, age=20}) {
    return `${url}?name=${name}&age=${age}`;
}
console.log(fun({url: "http://www.google.com", x: "ram", ega:50}))}

{function double(n){
    return [n, n*2];
}

const [t1, t2, t3=10] = double(6);
console.log(t1, t2, t3);}

{const stu = {name: "Sandeep", age: 12, gender: "male"};

console.log({...stu, age: 15});}

{const z1 = [1, 4, 5];
const z2 = z1;

const z3 = [1, 4, 5];

console.log(z1 === z2);
console.log(z1 === z3);}

const result = [
    {name: "abc", age: 16},
    {name: "def", age:10},
    {name: "nice", age:30},
    {name: "good", age:18}
]
.map(({age})=> age*2)
.filter(n => n>25) 

console.log(result)