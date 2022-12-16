const spy = chai.spy();

function receivesAFunction(spy){
    return spy()
}

function returnsANamedFunction(){
    return function fn(){
        console.log('name called');
    }
}

function returnsAnAnonymousFunction(){
    return () => "an anonymous function";

}