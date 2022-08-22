const receivesAFunction = (callback) => {
    callback(); 
}

const returnsANamedFunction = () => {
    return function namedFunction() {
        console.log('Hello World');
    }
}

const returnsAnAnonymousFunction = () => {
    return () => {
        console.log('Hello World');
    }
}