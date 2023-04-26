import React, { useState } from 'react'
import '../components/Home.css'
import Items from '../Items'
const Home = () => {

    const [items, setItems] = useState(Items);
    const filterItem = (categItem) => {
        const updateItems = Items.filter((curElem) => {
            return curElem.category === categItem;

        });
        setItems(updateItems);
    }

    return (
        <>
            <div className='header'>
                <img src="dc.png" alt="logo" />
            </div>
            <hr />
            <div className="item-filter">
                <button onClick={() => setItems(Items)}>All</button>
                <button onClick={() => filterItem('Drawing')}>Drawing</button>
                <button>Anime</button>
                <button onClick={() => filterItem('Bike')}>Bike</button>
                <button>Car</button>
                <button>Games</button>
                <button>Nature</button>
                <button>Food</button>
            </div>

            <div className="continer">
                <div className="row">

                    {
                        items.map((elem) => {
                            const { id, image, price, } = elem;
                            return (
                                <div className="img-container">
                                    <img src={image} alt="Denim Jeans" />
                                    <div className='nd-container'>
                                        <p>Price: {price}</p>
                                        <button>Buy</button>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Home
