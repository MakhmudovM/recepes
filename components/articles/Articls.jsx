import React from 'react'

function Articls() {
  return (
    <div>
         <h2 style={{textAlign:"center"}}>Recepts</h2>
        <hr />
        <Outlet/>
        <ul className="list">
            <li className="items">
               <div className="wrapper">
               <img src="https://main-cdn.sbermegamarket.ru/hlr-system/-17/321/304/386/131/158/100054460936b0.png" alt="palov" width={250} height={150}/>
                <h2 className="item-title">Palov</h2>
                <p className="item-text">cookingTime: 60 minutes</p>
                <a className="btn" href="https://www.russianfood.com/recipes/recipe.php?rid=144936" target="blanck">more</a>

               </div>
            </li>
            <li className="items">
                <div className="wrapper">
                <img src="https://chaihana19.ru/wp-content/uploads/2021/04/Машхурда.jpg" alt="mastva" width={250} height={150}/>
                <h2 className="item-title">Mastava</h2>
                <p className="item-text">cookingTime: 60 minutes</p>
                <a className="btn" href="https://www.russianfood.com/recipes/recipe.php?rid=147900"target="blanck">more</a>

                </div>
            </li>
            <li className="items">
               <div className="wrapper">
               <img src="https://gzeli-dostavka.ru/uploads/webp/catalog/piccy/shurpasbaraninoj.webp" alt="sho'rva" width={250} height={150}/>
                <h2 className="item-title">Sho'rva</h2>
                <p className="item-text">cookingTime: 60 minutes</p>
                <a className="btn" href="https://www.russianfood.com/recipes/recipe.php?rid=118744" target="blanck">more</a>
               </div>
            </li>
        </ul>
    </div>
  )
}

export default Articls