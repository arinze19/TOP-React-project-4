import "../../styles/product/product-images.css"

function ProductImages({ images }) {
  const imageList = images.map((img, idx) => {
      // compose HTML tags based on media format
    if (img.type === "image") {
      return <img src={img.url} alt={img.name} key={idx} />;
    }
    return <video src={img.url} key={idx} autoPlay="autoplay" loop muted></video>;
  });

  return <div className="product-images-container">{imageList}</div>;
}

export default ProductImages;
