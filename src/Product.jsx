import React from 'react'
import Pro from './Pro.jsx'
function Product() {
    const products = [
        {id:1,title:'product one',desc:'this is product one',price:1000},
        {id:2,title:'product two',desc:'this is product two',price:2000},
        {id:3,title:'product three',desc:'this is product three',price:3000},
    ];
  return (
    <div>
    <div className="container">
      <div className="row">
      {products.map((e)=>{
            return <Pro {...e} key={e.id}/>
      })}
      </div>
      
      </div>
    </div>
  )
}

export default Product