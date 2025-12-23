const container = document.getElementById("products");

if (!container) {
  alert("PRODUCTS DIV NOT FOUND");
}

PRODUCTS.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>${p.title}</h2>
    <p>$${p.price}</p>
    <img src="${p.image}" width="200">
  `;
  container.appendChild(div);
});
