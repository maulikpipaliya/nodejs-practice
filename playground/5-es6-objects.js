const name = "Joyy";
const userAge = "22";


//Object property shorthand
const user = {
    name, // (name: name) if variable names are the same, we can use this syntax
    age: userAge, // cant use here
    location: 'Mumbai'
}

console.log(user);

//Object destructuring

const product = {
    label : 'Rich Dad Poor Dad',
    price : 250,
    stock : 100,
    salePrice : 280, //item not on sale
    anotherObj : {
        title: 'Sample',
        note : 'Note '
    }
}

const label = product.label;
const price = product.price;

const {stock: productStock, salePrice, anotherObj, nonExistentProperty = 43} = product; // same as above

console.log(label,'\n',price, '\n', productStock, '\n', salePrice, '\n' , anotherObj, '\n ', nonExistentProperty);


// inline destructuring
const transact = (type, {salePrice}) => {
    console.log(salePrice);
}
transact('order', product)