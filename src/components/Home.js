import React from 'react';
import './Home.css'; 
import categoryItems from '../DataSource/categories';

export default function Home() {

   function renderCategoryItem(){
       
       return categoryItems.map((categoryItem) =>{
        return(
            <div className="flex justify-center items-center flex-col" key={categoryItem.name}>
                <div className="category-outer-circle flex justify-center items-center">
                  <div className="category-inner-circle flex justify-center items-center">
                   <span className="material-icons text-4xl">{categoryItem.iconName}</span>
                  </div>
                </div>
                <div className="category-text font-bold">{categoryItem.name}</div>
             </div>
        );

       })
    }




    return (
        <div>
            <div className="header text-white flex justify-center items-center text-3xl font-bold">
                Stories Feed
            </div>
            <div className="grid grid-cols-3 mt-4">{renderCategoryItem()}</div>
        </div>
    );
}
