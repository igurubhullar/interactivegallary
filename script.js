const imagesData = [
    {
      src: 'The_Golden_Temple_of_Amrithsar_7.jpg',
      description: 'The Golden Temple in Amritsar, a symbol of Sikhism.',
    },
    {
      src: 'download.jpeg',
      description: 'The lush green fields of Punjab during harvest season.',
    },
    {
      src: 'download (1).jpeg',
      description: 'Traditional Punjabi Bhangra dance during a cultural event.',
    },
    {
      src: 'Happy_Baishakhi.webp',
      description: 'Traditional Punjabi food, a feast for the senses.',
    },
    {
      src: 'college.jpeg',
      description: 'Rich heritage and historic landmarks in Punjab.',
    }
  ];
  
  const gallery = document.getElementById('gallery');
  const imageDetail = document.getElementById('image-detail');
  const detailImage = document.getElementById('detail-image');
  const detailDescription = document.getElementById('detail-description');
  const closeDetail = document.getElementById('close-detail');
  
  // Function to render gallery
  function renderGallery() {
    imagesData.forEach(image => {
      const div = document.createElement('div');
      div.classList.add('gallery-item');
      
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.description;
      
      // Description is hidden initially
      const description = document.createElement('p');
      description.textContent = image.description;
      description.style.display = 'none'; // Hide description by default
  
      div.appendChild(img);
      div.appendChild(description);
  
      div.addEventListener('click', () => openImageDetail(image, description));
  
      gallery.appendChild(div);
    });
  }
  
  // Function to open image detail view
  function openImageDetail(image, description) {
    detailImage.src = image.src;
    detailDescription.textContent = image.description;
    imageDetail.style.display = 'block'; // Show the detail view
    
    // Toggle the visibility of description in the gallery
    description.style.display = (description.style.display === 'none') ? 'block' : 'none'; // Show or hide description
  }
  
  // Close the detail view
  closeDetail.addEventListener('click', () => {
    imageDetail.style.display = 'none'; // Hide the detail view
  });
  
  // Initial render of the gallery
  renderGallery();
  