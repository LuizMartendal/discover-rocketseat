const time = 1000
const checking = () => console.log("checking");

const interval = setInterval(checking, time)

setTimeout(() => clearInterval(interval), 4000)