const registeredImages = new Set();

function registerImage(imageSrc) {
  if (registeredImages.has(imageSrc)) {
    console.log(`Image ${imageSrc} is already registered.`);
    return;
  }

  // Register the image (e.g., load it, add it to the DOM, etc.)
  console.log(`Registering image: ${imageSrc}`);
  registeredImages.add(imageSrc);

  // Add your image registration logic here
}

// Usage
registerImage('image1.jpg'); // Registering image: image1.jpg
registerImage('image2.jpg'); // Registering image: image2.jpg
registerImage('image1.jpg'); // Image image1.jpg is already registered.
