import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    Error,
  } = useFetch("https://dummyjson.com/products/" + id);

  console.log(product);
  return (
    <>
      {product && (
        <div className="align-content">
          <h1 className="text-4xl mb-5">{product.title}</h1>
          <div className="carousel carousel-center p-4 space-x-3 bg-neutral rounded-box">
            {product.images.map((image) => {
              return (
                <div key={image} className="carousel-item">
                  <img
                    src={image}
                    className="rounded-box max-h-60 lg:max-h-96  h-full object-contain"
                  />
                </div>
              );
            })}
          </div>

          <p className="text-4xl mt-5 bg-green-100">
            Brand: <b></b>
            {product.brand}
          </p>
          <p className="text-4xl mt-5 bg-green-200">
            Discount: <b></b>
            {product.discountPercentage}
          </p>

          <p className="text-4xl mt-5   bg-green-300">
            Rating: <b></b>
            {product.rating}
          </p>

          <p className="text-4xl  mt-5 mb-8  bg-green-500">
            Categoria: <b></b>
            {product.category}
          </p>
        </div>
      )}
    </>
  );
}

export default Product;
