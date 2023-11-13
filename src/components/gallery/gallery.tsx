type TGalleryProps = {
  images: string[] | undefined;
}

function Gallery({images}: TGalleryProps) : JSX.Element { //TODO: делать ли что-то с разбиением? количество картинок по умолчанию?
  const imagesList : JSX.Element[] = [];
  if (images !== undefined) {
    const imagesCount = images.length > 6 ? 6 : images.length;
    for (let i = 0; i < imagesCount; i++) {
      imagesList.push(
        <div className="offer__image-wrapper">
          <img className="offer__image" src={images[i]} key={images[i]} alt="Photo studio"/>
        </div>
      );
    }
  }

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imagesList}
      </div>
    </div>
  );
}

export default Gallery;
