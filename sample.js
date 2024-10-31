let data = [
    {
        name: "abhi",
        interests: ["cricket", "football"],
        seats: {
            9:[1,1,1,1,1,1,1,1],
            12: [1,1,1,1,1,1,1]
        }
    },
    {
        name: "john",
        interests: ["cricket", "football"],
        seats: {
            9:[1,1,1,1,1,1,1,1],
            12: [1,1,1,1,1,1,1]
        }
    },
    {
        name: "joby",
        interests: ["cricket", "football"],
        seats: {
            9:[1,1,1,1,1,1,1,1],
            12: [1,1,1,1,1,1,1]
        }
    }
]


let age = 25
let name = "age"
data?.find((item) => {
    if(item?.name === "abhi"){
        item[name] = age;
    }
})

console.log(data[0]);