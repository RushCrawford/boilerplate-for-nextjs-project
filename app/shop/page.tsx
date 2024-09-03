import ProductTile from "../components/ProductTile"

const Shop = () => {
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-2xl m-4">
                ALL PRODUCTS
            </h1>
            <ProductTile />
        </div>
    )
}

export default Shop