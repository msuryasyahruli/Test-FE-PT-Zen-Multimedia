import React from 'react'
import { useTheme } from '../ThemeContext';

//assets
import headphone from '../assets/img/headphone.png'
import watch from '../assets/img/watch.png'
import bag from '../assets/img/bag.png'
import shoes from '../assets/img/shoes.png'
import gamepad from '../assets/img/gamepad.png'
import camera from '../assets/img/camera.png'   

const tableData = [
    { Photo: headphone, ProductName: 'Headphone', price: 100, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, necessitatibus?' },
    { Photo: watch, ProductName: 'Watch', price: 120, Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, totam.' },
    { Photo: bag, ProductName: 'Bag', price: 80, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, eveniet.' },
    { Photo: shoes, ProductName: 'Shoes Casual', price: 150, Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut.' },
    { Photo: gamepad, ProductName: 'Gamepad', price: 90, Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dolor.' },
    { Photo: camera, ProductName: 'Camera', price: 110, Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ipsum.' },
];

const MainContent = () => {
    const { theme } = useTheme();

    return (
        <>
            <main>
                <article>
                    <table className={`product-table ${theme === 'dark' ? 'dark' : ''}`}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Photo</th>
                                <th>Product name</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}.</td>
                                    <td>
                                        <img src={data.Photo} alt={data.ProductName} className="product-image" />
                                    </td>
                                    <td>{data.ProductName}</td>
                                    <td>${data.price}</td>
                                    <td>
                                        {data.Description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </main>
        </>
    )
}

export default MainContent