import React from 'react'
import Navbar from './Navbar'

const ViewStud = () => {
  return (
    <div>
      <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table className="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">Addmission Number</th>
      <th scope="col">Roll number</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Parent name</th>
      <th scope="col">Mobile number</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">100</th>
      <td>10</td>
      <td>Mayuri</td>
      <td>6</td>
      <td>Maya</td>
      <td>09802387139</td>
      <td>mayuralayam</td>
    </tr>
    <tr>
    <th scope="row">102</th>
      <td>2</td>
      <td>Ajoy</td>
      <td>8</td>
      <td>Mathew</td>
      <td>07812347139</td>
      <td>grace villa</td>
    </tr>
    <tr>
    <th scope="row">113</th>
      <td>20</td>
      <td>Nelson</td>
      <td>6</td>
      <td>John</td>
      <td>7992387439</td>
      <td>Kripa nivas</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
</div>
    </div>
  )
}

export default ViewStud