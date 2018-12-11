async function foo() {
    let a = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve("a");
        },2000)
        console.log("a")
    })
    console.log("then")
    let b = await new Promise(resolve=>{
        if(a == "a"){
            setTimeout(()=>{
                resolve("b");
            },1000)
        }else{
            console.log("erro")
        }
    })
    console.log(b);
}
foo();