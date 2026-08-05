import React, { useState } from 'react';

const carouselImages = [
  { src: '/assets/carrossel/cromo.l.01.png', alt: 'Revestimento de cilindro cromado' },
  { src: '/assets/carrossel/borracha.09.png', alt: 'Cilindro revestido em borracha' },
  { src: '/assets/carrossel/cromo.f.03.png', alt: 'Cilindro com acabamento cromado' },
  { src: '/assets/carrossel/rilsan.04.png', alt: 'Revestimento técnico em Rilsan' },
  { src: '/assets/carrossel/dobradeira.06.png', alt: 'Cilindro para dobradeira' },
  { src: '/assets/carrossel/borracha.02.png', alt: 'Revestimento industrial em borracha' },
  { src: '/assets/carrossel/dobra.08.png', alt: 'Solução para cilindro de dobra' },
  { src: '/assets/carrossel/dobra.p.2.png', alt: 'Revestimento para cilindro de dobra' },
];

const ImageMarquee: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof carouselImages)[number] | null>(null);
  const repeatedImages = [...carouselImages, ...carouselImages];

  const handleSelectImage = (image: (typeof carouselImages)[number]) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={`ebs-marquee ${selectedImage ? 'is-lightbox-open' : ''}`} aria-label="Galeria de revestimentos EBS">
        <div className="ebs-marquee__track">
          {repeatedImages.map((image, index) => {
            const isSelected = selectedImage?.src === image.src;

            return (
              <figure
                className={`ebs-marquee__card ${isSelected ? 'is-selected' : ''}`}
                key={`${image.src}-${index}`}
                aria-hidden={index >= carouselImages.length}
                onClick={() => handleSelectImage(image)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleSelectImage(image);
                  }
                }}
                tabIndex={0}
                role="button"
              >
                <img src={image.src} alt={index < carouselImages.length ? image.alt : ''} loading="lazy" />
              </figure>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div className="ebs-marquee__lightbox" onClick={handleCloseImage} role="dialog" aria-modal="true">
          <div className="ebs-marquee__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button className="ebs-marquee__lightbox-close" type="button" onClick={handleCloseImage} aria-label="Fechar imagem">
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="ebs-marquee__lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageMarquee;
