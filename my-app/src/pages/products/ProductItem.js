


export const ProductsItem = ({ product }) => {
    return (
        <div>
            <h4>
                {product.name}, ფასი - ${product.price}
            </h4>
            <h6>
                {product.stock ? "მარაგშია" : "არ არის მარაგში"}, კატეგორია - {product.category}
            </h6>
        </div>
    )
}