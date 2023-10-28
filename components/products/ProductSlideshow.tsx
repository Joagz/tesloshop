import { FC } from "react";
import { Slide } from "react-slideshow-image";
import styles from "./ProductSlideshow.module.css";
import "react-slideshow-image/dist/styles.css";

interface Props {
  images: string[];
}

const ProductSlideshow: FC<Props> = ({ images }) => {
  return (
    <Slide arrows={false} easing="ease" duration={3000} indicators>
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          <div className={styles["each-slide"]} key={image}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};

export default ProductSlideshow;
