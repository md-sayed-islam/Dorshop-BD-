export default function Home() {
  const products = [
    { id: 1, name: "Poedagar Black-Gold Watch", price: 2499, image: "https://i.ibb.co.com/pB6nG1bn/1747030215-L-2.jpg" },
    { id: 2, name: "Poedagar Silver-White Watch", price: 2299, image: "https://i.ibb.co.com/fdMtxD4D/1747030215-L-1.jpg" },
    { id: 3, name: "Poedagar Black Steel Watch", price: 2199, image: "https://i.ibb.co.com/LD868N7y/1769614022-L-1.jpg" },
  ];

  return (
    <main style={{padding: "20px", fontFamily: "Arial", background: "#f5f5f5"}}>
      <h1 style={{textAlign: "center", color: "#333"}}>Dorshop BD 🔥</h1>
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px"}}>
        {products.map(product => (
          <div key={product.id} style={{border: "1px solid #ddd", padding: "15px", borderRadius: "10px", textAlign: "center", background: "white"}}>
            <img src={product.image} alt={product.name} style={{width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px"}}/>
            <h3>{product.name}</h3>
            <p style={{fontSize: "20px", fontWeight: "bold", color: "green"}}>৳{product.price} BDT</p>
            <button style={{padding: "10px", background: "green", color: "white", border: "none", borderRadius: "5px", width: "100%"}}>Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}
