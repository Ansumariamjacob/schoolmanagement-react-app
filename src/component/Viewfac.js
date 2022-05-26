import React from 'react'
import Navbar from './Navbar'

const Viewfac = () => {
  return (
    <div>
      <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table className="table table-striped">
  <thead>
    <tr>
      
      
      <th scope="col">Name</th>
      <th scope="col">Education</th>
      <th scope="col">Mobile number</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
      <th scope="col">District</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Priya</th>
      <td>Mtech</td>
      <td>9801234111</td>
      <td>krishor nivas</td>
      <td>690104</td>
      <td>pathanamthitta</td>
      
    </tr>
    <tr>
    <th scope="row">Ravi</th>
      <td>M.Ed</td>
      <td>7865090999</td>
      <td>puthanvittu</td>
      <td>690107</td>
      <td>Thissur</td>
      
    </tr>
    <tr>
    <th scope="row">Reena</th>
      <td>Msc</td>
      <td>8979798561</td>
      <td>malayali vittu</td>
      <td>690114</td>
      <td>Kollam</td>
      
    </tr>
  </tbody>
</table>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewfac