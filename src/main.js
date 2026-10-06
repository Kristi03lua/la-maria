const currentYear = document.querySelector("#current-year");
const catalog = window.LaMariaData;

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function createWhatsAppUrl(message) {
  return `https://wa.me/${catalog.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function createProductMessage(product) {
  if (product.type === "quote") {
    return `¡Hola La-María! 🎉
Quiero cotizar un producto especial:

Producto de interés: ${product.name}
Número de personas / porciones: (indícalo aquí)
Temática o estilo deseado: (indícalo aquí)
Fecha del evento: (indícala aquí)
Presupuesto aproximado (opcional): 

Quedo atento(a) a su respuesta. ¡Gracias!`;
  }

  return `¡Hola La-María! 🍰
Me interesa el siguiente producto:

Producto: ${product.name}
Precio: ${product.price}
Cantidad: ${product.quantity}
Fecha estimada del evento: (indícame la fecha aquí)

Quedo al pendiente de la confirmación. ¡Gracias!`;
}

function createProductCard(product) {
  const card = document.createElement("li");
  card.className = "product-card";
  card.dataset.category = product.category;

  const picture = document.createElement("picture");
  const image = document.createElement("img");
  image.src = `public/images/productos/${product.image}.jpg`;
  image.alt = product.imageAlt;
  image.width = 600;
  image.height = 600;
  image.loading = "lazy";
  image.decoding = "async";
  picture.append(image);

  const details = document.createElement("div");
  details.className = "product-details";

  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.category;

  const name = document.createElement("h3");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = product.price;

  const orderLink = document.createElement("a");
  orderLink.className = "product-order";
  orderLink.href = createWhatsAppUrl(createProductMessage(product));
  orderLink.target = "_blank";
  orderLink.rel = "noopener noreferrer";
  orderLink.textContent = product.type === "quote" ? "Cotizar por WhatsApp" : "Pedir por WhatsApp";
  orderLink.setAttribute("aria-label", `${orderLink.textContent}: ${product.name}`);

  details.append(category, name, price, orderLink);
  card.append(picture, details);
  return card;
}

function renderProducts(category = "Todos") {
  const visibleProducts = catalog.products.filter((product) => category === "Todos" || product.category === category);
  const productGrid = document.querySelector("#product-grid");
  productGrid.replaceChildren(...visibleProducts.map(createProductCard));
  document.querySelector("#product-count").textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "producto" : "productos"}`;
}

function createPromotionCard(promotion) {
  const card = document.createElement("article");
  card.className = "promotion-card";

  const heading = document.createElement("h3");
  heading.textContent = promotion.name;

  const description = document.createElement("p");
  description.textContent = promotion.description;

  const link = document.createElement("a");
  link.className = "promotion-link";
  link.href = createWhatsAppUrl(promotion.message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Consultar promoción";
  link.setAttribute("aria-label", `${link.textContent}: ${promotion.name}`);

  card.append(heading, description, link);
  return card;
}

if (catalog) {
  const heroWhatsApp = document.querySelector("#hero-whatsapp");
  heroWhatsApp.href = createWhatsAppUrl("¡Hola La-María! Quiero conocer sus productos y disponibilidad. ¡Gracias!");

  const contactWhatsApp = document.querySelector("#contact-whatsapp");
  contactWhatsApp.href = createWhatsAppUrl("¡Hola La-María! Quiero solicitar información sobre sus productos. ¡Gracias!");
  contactWhatsApp.textContent = catalog.phoneDisplay;
  document.querySelector("#contact-phone").href = `tel:${catalog.phoneNumber}`;
  document.querySelector("#contact-phone").textContent = catalog.phoneDisplay;
  document.querySelector("#contact-email").href = `mailto:${catalog.email}`;
  document.querySelector("#contact-email").textContent = catalog.email;

  const contactForm = document.querySelector("#contact-form");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const message = `¡Hola La-María! Me gustaría solicitar información.\n\nNombre: ${formData.get("name").trim()}\nMensaje: ${formData.get("message").trim()}\n\nQuedo al pendiente. ¡Gracias!`;
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    document.querySelector("#contact-form-status").textContent = "WhatsApp se abrió con tu mensaje. Revísalo y confirma el envío.";
  });

  document.querySelector("#promotion-grid").replaceChildren(...catalog.promotions.map(createPromotionCard));
  renderProducts();

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((filterButton) => {
        filterButton.setAttribute("aria-pressed", String(filterButton === button));
      });
      renderProducts(button.dataset.category);
    });
  });
}