function init() {
  loadData('http://localhost:3334/recommendations/mostpopular', 'most-popular-section');

  loadData('http://localhost:3334/recommendations/pricereduction', 'price-reduction-section');
}

function loadData(url, elementId) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false); // false for synchronous request
  xmlHttp.send(null);

  const products = JSON.parse(xmlHttp.response);
  if (products instanceof Array) {
    products.forEach(product => {
      populateCard(product, elementId);
    });
  }
}

function populateCard(product, elementId) {
  const el = document.getElementById(elementId);

  const html = `
        <li class="card">
          <img class="card-image" src="http:${product.productImages[0].url}" />
          <span class="product-name">${product.name}</span>
          <strike class="product-old-price">${formatToBRL(product.productSkus[0].oldPrice)}</strike>
          <small class="product-price">Por <span class="purple">${formatToBRL(product.productSkus[0].price)}</span></small>
          <small class="product-installment">${product.productSkus[0].installmentCount}x ${formatToBRL(product.productSkus[0].installmentPrice)}</small>
        </li>
      `;
  const card = document.createElement("div")
  card.innerHTML = html;

  el.appendChild(card);
}

function goToLeft(containerName) {
  const container = document.getElementById(containerName)
  container.scrollTo({ left: container.scrollLeft - 250, behavior: 'smooth' })
}

function goToRight(containerName) {
  const container = document.getElementById(containerName)

  console.log(container.scrollLeft)
  container.scrollTo({ left: container.scrollLeft + 250, behavior: 'smooth' })
}

function formatToBRL(value) {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}