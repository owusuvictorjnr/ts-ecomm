import './App.css'
import { sampleProducts } from './data'

function App() {
  return (
    <div>
      <header>vitech solutions</header>

      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>&#8373;{product.price}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer>all right reserved</footer>
    </div>
  )
}

export default App
