// console.log(process)

console.log("type", process.type)

console.log("platform", process.platform)

console.log("versions", process.versions)

// on hang(), Date stops appearing in console. => System hanged
setInterval(() => {
    console.warn(new Date())
}, 500)