import React from "react";
import Card from "antd/lib/card/Card";

const { Meta } = Card;

const ProductCard = ({
    coverUrl, 
    title, 
    listPrice, 
    salePrice, 
    discountPercentage, 
    salesNumber, 
    rating, 
    isLike}) => {
    return(
      <Card
      hoverable
      style={{
      }}
      cover={<img alt='cover' src={coverUrl} />}
    >
      <Card.Meta 
      title={title} 
      description={
        <div>
          <span>{listPrice}</span>
          <span>{salePrice}</span>
        </div>
      } />
    </Card>
    )
  
}

export default ProductCard