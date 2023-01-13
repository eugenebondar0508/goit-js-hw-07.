import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(item => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = item.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = item.preview
	galleryImage.setAttribute('title', item.description)
	galleryImage.alt = item.description

	galleryLink.append(galleryImage)
	items.push(galleryLink)
})
gallery.append(...items)

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})
