import product1 from "../assets/image-product-1.jpg";
import product1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import product2 from "../assets/image-product-2.jpg";
import product2Thumbnail from "../assets/image-product-2-thumbnail.jpg";
import product3 from "../assets/image-product-3.jpg";
import product3Thumbnail from "../assets/image-product-3-thumbnail.jpg";
import product4 from "../assets/image-product-4.jpg";
import product4Thumbnail from "../assets/image-product-4-thumbnail.jpg";

export const product = {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    price: 250,
    discount: 0.5,
    description: `These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand
      everything the weather can offer.`,
    images: [
      {
        id: 1,
        image: product1,
        thumbnail: product1Thumbnail,
        active: true,
      },
      {
        id: 2,
        image: product2,
        thumbnail: product2Thumbnail,
      },
      {
        id: 3,
        image: product3,
        thumbnail: product3Thumbnail,
      },
      {
        id: 4,
        image: product4,
        thumbnail: product4Thumbnail,
      },
    ],
    category: {
      id: 4,
      name: "Shoes",
    },
  };