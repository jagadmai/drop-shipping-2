const container = document.getElementById("products");

PRODUCTS.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <img src="${p.image}">
    <h3>${p.title}</h3>
    <div class="price">$${p.price}</div>
    <button class="btn">Add to Cart</button>
  `;

  div.onclick = () => {
    location.href = `product.html?id=${p.id}`;
  };

  container.appendChild(div);
});
