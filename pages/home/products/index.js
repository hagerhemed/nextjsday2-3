import Link from "next/link";

function Products({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-lg-3 col-md-6 mb-4 mt-5">
            <div className="card">
              <img src={p.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">
                 {p.description}
                </p>
                <Link href={`/home/products/${p.id}`} className="btn btn-dark">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { props: { products: data } };
}