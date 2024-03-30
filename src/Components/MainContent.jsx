import React from 'react'
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
    return (
        <>
            <main>
                <article>
                    <table>
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Product name</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={data.Photo} alt="Foto Produk 1" />
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