import React from 'react';
import { CategoryMain, Icondiv, IconDiv2, ParaDiv, ParaList } from "./styledComponent";

const CategoryHalf = (props) => {
  const { categoryDetail , ClickIcon} = props;
  const { name, icon , categoryId} = categoryDetail;

   
  const iconRender = () => {
    ClickIcon(categoryId)
  }


  return (
    <CategoryMain>
      <Icondiv  onClick={iconRender}>
        <IconDiv2>{icon}</IconDiv2>
        <ParaDiv>
          <ParaList>{name}</ParaList>
        </ParaDiv>
      </Icondiv>
    </CategoryMain>
  );
};

export default CategoryHalf;