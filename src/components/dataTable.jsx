import React, { useState, useEffect } from 'react';
import './css/dataTable.css'; // Create and use this CSS file for styling

const DataTable = () => {
  const initialData = [
    { title: "SQL Basics To Advanced Mastery Course", startDate: "2023-01-01", endDate: "2023-03-01", price: "100", expiry: "180", status: "Published" },
    { title: "30 Days Of Javascript Challenge", startDate: "2023-02-01", endDate: "2023-04-01", price: "200", expiry: "365", status: "Unpublished" },
    { title: "Interview Preparation With Javascript 2.0", startDate: "2023-03-01", endDate: "2023-05-01", price: "300", expiry: "240", status: "Published" },
    { title: "Batch 4", startDate: "2023-03-01", endDate: "2023-05-01", price: "300", expiry: "33", status: "Published" },
    { title: "Batch 5", startDate: "2023-03-01", endDate: "2023-05-01", price: "0", expiry: "90", status: "Published" },
    { title: "Batch 6", startDate: "2023-03-01", endDate: "2023-05-01", price: "300", expiry: "90", status: "Published" },
    { title: "Batch 7", startDate: "2023-03-01", endDate: "2023-05-01", price: "0", expiry: "90", status: "Published" },
    { title: "Batch 8", startDate: "2023-03-01", endDate: "2023-05-01", price: "0", expiry: "90", status: "Published" },
    { title: "Batch 9", startDate: "2023-03-01", endDate: "2023-05-01", price: "199", expiry: "90", status: "Published" },
    { title: "Batch 10", startDate: "2023-03-01", endDate: "2023-05-01", price: "300", expiry: "90", status: "Published" },
    { title: "Batch 11", startDate: "2023-03-01", endDate: "2023-05-01", price: "0", expiry: "90", status: "Published" },
    { title: "Batch 12", startDate: "2023-03-01", endDate: "2023-05-01", price: "199", expiry: "90", status: "Unpublished" },
    { title: "Batch 13", startDate: "2023-03-01", endDate: "2023-05-01", price: "299", expiry: "90", status: "Unpublished" },
    // Add more batches as needed
  ];

  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = initialData.filter(batch =>
      batch.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
    setCurrentPage(1);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handleSearch = () => {
    const filteredData = initialData.filter(batch =>
        batch.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData);
      setCurrentPage(1);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <div className="mainTableContainer">
        <h1>Chai aur Code</h1>
        <div className="container">
        <div className="headerContainer">
            <h1>Batches</h1>
            <p>Create learner’s batch and share information at the same time.</p>
        </div>
        <div className="dataTableContainer">
      <div className="searchContainer">

      <input
        type="text"
        placeholder="Search by Title "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />
      <button onClick={handleSearch} className="searchButton">Search</button>

      </div>
      <table className="dataTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price</th>
            <th>Validity/Expiry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((batch, index) => (
            <tr key={index}>
              <td>
                <img src="./public/dragableAssets/image_3.png" alt="" srcset="" /> <span className='titleText'> {batch.title}</span></td>
              <td>{batch.startDate}</td>
              <td>{batch.endDate}</td>
              <td>₹ &nbsp;{batch.price}</td>
              <td>{batch.expiry} &nbsp; days</td>
              <td > <span className={`status ${batch.status }`}>{batch.status}</span></td>

            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
    </div>
    </div>
    </>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DataTable;
