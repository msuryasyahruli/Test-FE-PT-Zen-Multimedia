import React from 'react'
import photo from '../assets/img/Produk.jpg'

const tableData = [
    { Photo: photo, ProductName: 'Product 1', price: 100, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, necessitatibus?' },
    { Photo: photo, ProductName: 'Product 2', price: 120, Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, totam.' },
    { Photo: photo, ProductName: 'Product 3', price: 80, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, eveniet.' },
    { Photo: photo, ProductName: 'Product 4', price: 150, Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut.' },
    { Photo: photo, ProductName: 'Product 5', price: 90, Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dolor.' },
    { Photo: photo, ProductName: 'Product 6', price: 110, Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ipsum.' },
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