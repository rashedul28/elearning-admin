import React from "react";
import "../CSS/Card.css";

const Card = () => {
  return (
    <div>
      {/* <h2 style="text-align:center">Product Card</h2> */}

      <div class="card">
        {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:10%" /> */}
        <h1>Tailored Jeans</h1>
        {/* <p class="price">$19.99</p> */}
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.
        </p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
};

export default Card;
