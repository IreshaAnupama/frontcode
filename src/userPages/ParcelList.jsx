import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import './UserCss.css';
import { NavbarUser } from './NavbarUser';
const ParcelList = () => {
  return (
    <div><div><NavbarUser></NavbarUser></div>
        <div className="center-component">
    <Card border="primary" style={{ width: '70rem' }}>
    <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Company name</th>
          <th>Items</th>
          <th>Curier information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 january 2023</td>
          <td>1.00-2.00 pm</td>
          <td>Viana</td>
          <td><li>Shampoo :- 1</li><li>Conditioner :1</li></td>
          <td><li>Name :- aaaaa </li><li>Vehicle No :- NL4322</li></td>
        </tr>
        <tr>
          <td>1 january 2023</td>
          <td>1.00-2.00 pm</td>
          <td>Viana</td>
          <td><li>Shampoo :- 1</li><li>Conditioner :1</li></td>
          <td><li>Name :- aaaaa </li><li>Vehicle No :- NL4322</li></td>
        </tr>
        <tr>
          <td>1 january 2023</td>
          <td>1.00-3.00 pm</td>
          <td>Viana</td>
          <td><li>Shampoo :- 1</li><li>Conditioner :1</li></td>
          <td><li>Name :- aaaaa </li><li>Vehicle No :- NL4322</li></td>
        </tr>
      </tbody>
    </Table>
    </Card>
    </div>
    </div>
  )
}

export default ParcelList