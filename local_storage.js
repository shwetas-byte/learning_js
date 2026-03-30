// 4 functions are used
// 1. setItem()-- used to store data
// 2. getItem()--to acces data from local storage
// 3.removeItem()--to remove data from local storage
// 4.clear()--to clear the local storage
// format= key and value
// only string type of data
localStorage.setItem("Name","Shweta Singh")
localStorage.setItem("Learning","Javascript")

let n=localStorage.getItem("Learning")
document.write(n)

localStorage.removeItem("Learning")

// localStorage.clear()