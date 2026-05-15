function square(value){
    return value * value;
}

function greet(){
    console.log("Hello");
}

// module.exports = {square};

export {square};
export default greet;