import { useEffect, useState } from "react";
import { CarouselImg } from "../../styles/banner";

export default function Carousel (props){
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoPlay || !props.showButtons) {
          const interval = setInterval(() => {
            selectNewImage(selectedIndex, props.images);
          }, 1000);
          return () => clearInterval(interval);
        }
    });

    const selectNewImage = (index, images, next = true) => {
    // setLoaded(false);
    setTimeout(() => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }, 1000);
    };

    return (
        <CarouselImg
        src={selectedImage}
        alt="Banner"
        // className={loaded ? "loaded" : ""}
        // onLoad={() => setLoaded(true)}
        />
    );
}