import React from 'react';
import { ImagesProduct, ImageCard, ImagePara, ImageParaDiv, Imagepara2, LinkDes } from "./styledComponent";

const ProductDesign = (props) => {
    const { ProductItemDetail } = props;
    const { title, imageUrl, subTitle, id} = ProductItemDetail;

    return (
             <ImageCard>
                <LinkDes to={`/products/${id}`}>
       
                <ImagesProduct src={imageUrl} />
                <ImageParaDiv>
                    <Imagepara2>{title}</Imagepara2>
                    <ImagePara>{subTitle}</ImagePara>
                </ImageParaDiv>
                </LinkDes>
            </ImageCard>
       
    );
};

export default ProductDesign;


