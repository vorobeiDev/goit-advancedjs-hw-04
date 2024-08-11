import SimpleLightbox from 'simplelightbox';

const renderHTMLElement = (node, content, position = 'beforeend') => {
  node.insertAdjacentHTML(position, content);
};

const removeInnerHTMLElement = (node) => {
  node.innerHTML = '';
};

export const renderSearchFormElement = (node) => {
  const content = `
    <form class="search-form" id="search-form">
      <input
        type="text"
        name="search"
        autocomplete="off"
        placeholder="Search images..."
      />
      <button type="submit">Search</button>
    </form>
  `;

  renderHTMLElement(node, content);
};

export const renderGallery = (node) => {
  const content = `<div class="gallery" id="gallery"></div>`;

  renderHTMLElement(node, content);
};

export const renderGalleryItem = (node, images) => {
  const content = images.map((image) => `
    <div class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="gallery-item-info">
        <div>
          <b>Likes</b>
          ${image.likes}
        </div>
        <div>
          <b>Views</b>
          ${image.views}
        </div>
        <div>
          <b>Comments</b>
          ${image.comments}
        </div>
        <div>
          <b>Downloads</b>
          ${image.downloads}
        </div>
      </div>
    </div>
  `)
  .join('');

  renderHTMLElement(node, content);
};

export const renderImagesElement = (node, images) => {
  removeInnerHTMLElement(node);

  if (images && images.length) {
    renderGalleryItem(node, images);
  }
};

export const renderLoadingElement = (node) => {
  removeInnerHTMLElement(node);

  const content = `
    <div class="loading">Loading images, please wait...</div>
    <span class="loader"></span>
  `;

  renderHTMLElement(node, content);
};