const button = document.getElementById('btn')

const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}

/*
Challenge 1:
  What is the 'this' value of 'product.getProductInfo' as we
  are using it now in the eventListener?
  Write your answer here:

Challenge 2:
  Debug the code so it works as intended.
*/


button.addEventListener('click', product.getProductInfo)




