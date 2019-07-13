// Object property shorthand

const name = 'Mike'
const userAge = 34

const user = {
    name,
    age: userAge,
    location: 'Tampa'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const price = product.price

const {label:productLabel, stock, quality = 5} = product
console.log(productLabel, stock, quality)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)