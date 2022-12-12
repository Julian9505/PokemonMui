import { useEffect, useState } from "react";
import { CarouselImg } from "../../styles/banner";

export default function Carousel (props){
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    // const [checked, setChecked] = useState(false);
    
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoPlay || !props.showButtons) {
          const interval = setInterval(() => {
            selectNewImage(props.images);
          }, 1000);
          return () => clearInterval(interval);
        }
    });

    const selectNewImage = (images, next = true) => {
    // setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedIndex(nextIndex);
      setSelectedImage(images[nextIndex]);
    }, 1000);
    };

    // const handleChange = () => {
    //   setChecked((prev) => !prev);
    // };
    return (
      // <Fade in={checked}>
        <CarouselImg
        src={selectedImage}
        alt="Banner"/>
      // </Fade>
    );
}