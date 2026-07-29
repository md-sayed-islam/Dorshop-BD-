    export default function Home() {
      const products = [
        { id: 1, name: "T-Shirt", price: 500, image: "https://via.placeholder.com/200" },
        { id: 2, name: "Headphone", price: 1200, image: "https://via.placeholder.com/200" },
        { id: 3, name: "Watch", price: 800, image: "https://via.placeholder.com/200" },
      ];

      return (
        <main style={{padding: "20px", fontFamily: "Arial"}}>
          <h1 style={{textAlign: "center"}}>Dorshop BD 🔥</h1>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px"}}>
            {products.map(product => (
              <div key={product.id} style={{border: "1px solid #ddd", padding: "10px", borderRadius: "10px"}}>
                <img src={product.image} alt={product.name} style={{width: "100%"}} />
                <h3>{product.name}</h3>
                <p>Price: {product.price} BDT</p>
                <button style={{padding: "8px", background: "green", color: "white", border: "none"}}>Buy Now</button>
              </div>
            ))}
          </div>
        </main>
      )
      }
