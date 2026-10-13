import React from 'react'
function Object() {
const student={
    id:1,name:"abc",age:10,dept:"it",hobbies:"sleep"
    // {id:2,name:"def",age:11,dept:"mec"},
    // {id:3,name:"ghi",age:12,dept:"cse"},
    // {id:4,name:"jkl",age:13,dept:"cs"},
    // {id:5,name:"mno",age:14,dept:"csbs"},
    // {id:6,name:"pqr",age:15,dept:"aids"},
    // {id:7,name:"stu",age:16,dept:"eee"},
    // {id:8,name:"vwx",age:17,dept:"ece"},
    // {id:9,name:"y",age:18,dept:"btech"},
    // {id:10,name:"z",age:19,dept:"be"}
}
const{id,name,dept, ...remains}=student
// console.log(student);
console.log(remains);
  return (
    <div>Object<br/>
        {name}
    </div>
  )
}
export default Object