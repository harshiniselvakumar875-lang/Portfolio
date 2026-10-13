import  React from 'react'

const ObjectExample=()=>{
    const student=[{
        id:1,
        name:"Selva",
        age:22,
        department:"IT",
        marks:88,
    },
    {
     id:2,
        name:"Mounika",
        age:21,
        department:"AIDS",
        marks:95
    },
]
// const data=student.filter(
//     function(x){
//         return x.marks>89
//     }
// )
// console.log(data);                                
// const datamark=student.filter((i)=>i.marks>90)                                                         
// console.log(datamark);
// const numbers=[1,2,3,4,5,6,7,8];
//  console.log("pop",numbers.pop(),numbers)
//  console.log("push",numbers.push(3),numbers)
//  console.log("shift",numbers.shift(),numbers)
//  console.log("unshift",numbers.unshift(2),numbers)

    //    const numbers=[1,22,3,4,5,6];
    //    const filtered=numbers.filter(
    //     function(x){
    //         return x>2
    //     }
    //    )
    //    console.log(filtered);

    const names=["selva","mouni","nesi","harshu"]
    const spliceresult=names.splice(1,2,"added")
    console.log(">>>>>>>>>>>>>"+ spliceresult)
    console.log(names);
return(
    <>
    {/* {student.map((i)=>{ */}
        {/* return (
            <> */}
            <table border="1" >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mark</th>
                    <th>Dept</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Harshini</td>
                        <td>20</td>
                        <td>90</td>
                        <td>Cyber</td>
                    </tr>
                    <tr>
                        <td>Mounika</td>
                        <td>31</td>
                        <td>98</td>
                        <td>AIDS</td>
                    </tr>
                </tbody>
            </table>
            {/* {datamark.map((i)=>{
    return(
        <>
        {i.name}
        </>
    )
})

} */}
            </>
        )
        
    {/* }
    )} */}
//     </>
// )
    // const data=student.map((i)=>{
//         return(
//         <>
//         {student.map((i)=>{
//             return i.name
//     })}
//         {/* {console.log(i.name)}
//         {console.log(i.age)} */}
//         </>
//         )
// }
//     console.log(data);
//     return(
//         <>
// {student.id}<br/>
// {student.name}
// </>
//     )
}
export default ObjectExample;