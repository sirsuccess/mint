import React, { useState, useEffect } from "react";
// import Pagination from "react-js-pagination";
import styled from "styled-components";

import TableData from "../../../../data/transactionData";
import Button from "../../../../components/commons/Buttons";
import Pagination from "../pagination/Pagination";
import Circle from "../../../../components/commons/Circle";
import "./Table.css";

function TableCustome() {
  const [tableData, setableData] = useState(TableData.Payments);
  const [currentPage, setCurrentPage] = useState(3);
  const [dataPerPage, setDataPerPage] = useState(10);

  // Get current tableData
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentTableData = tableData.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const HandleSelectTableData = e => {
    const value = e.target.value;
    if (value === "all") {
      setableData(TableData.Payments);
      return;
    }
    const filterData = TableData.Payments.filter(data => {
      return data.status === value;
    });
    setableData(filterData);
  };

  const HandleCurrentPage = e => {
    const value = e.target.value;
    setDataPerPage(value);
  };

  const HandleSearchTableData = e => {
    const value = e.target.value;
    const filterData = TableData.Payments.filter(data => {
      return setableData(data.status.includes(value));
    });
    // setableData(filterData);
  };

  useEffect(() => {}, [tableData]);
  const dropdownArr = (
    <img
      src="./assets/icons/arrow.svg"
      alt="Bell icon"
      className="dropdownArr"
      style={{ width: 20 }}
    ></img>
  );
  const rows = currentTableData.map((dataItem, idex) => {
    let color;
    if (dataItem.status === "Pending") {
      color = "#EBC315";
    } else if (dataItem.status === "Reconciled") {
      color = "#27AE60";
    } else {
      color = "#C4C4C4";
    }
    return (
      <li className="tableLi">
        <div className="circleDiv">
          <Circle
            circleProps={{
              bgColor: "#7F8FA4",
              text: "VW",
              width: "30px",
              fontSize: "12px"
            }}
          />
          {dataItem.item}
        </div>
        <div className="price">{dataItem.price}</div>
        <div className="transaction">{dataItem.transactionNo}</div>
        <div className="time">
          {dataItem.time}
          <Button color={color} title={dataItem.status} />
          {dropdownArr}
        </div>
      </li>
    );
  });

  return (
    <>
      <div className="tableLookUp1">
        <div className="firstTableHead">
          <label htmlFor="SelectPayment">Showing: {} </label>{" "}
          <select
            name="SelectPayment"
            id="SelectPayment"
            onChange={HandleCurrentPage}
            className="SelectPayment numSel"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>{" "}
          out of {tableData.length} Payments
        </div>

        <div className="searchTable">
          <img
            src={"./assets/icons/search.svg"}
            alt="search icon"
            style={{ width: 15 }}
          />{" "}
          <input
            type="text"
            placeholder="Search Payments...."
            onChange={HandleSearchTableData}
            className="SelectPayment"
          />
        </div>
        <div className="SecondTableHead">
          <label htmlFor="SelectPayment">Show: {} </label>{" "}
          <select
            className="SelectPayment"
            name="SelectPayment"
            id="SelectPayment"
            onChange={HandleSelectTableData}
          >
            <option value="all">All</option>
            <option value="Pending">Pending</option>
            <option value="Reconciled">Reconciled</option>
            <option value="un-reconciled">Un-reconciled</option>
            <option value="Settled">Settled</option>
            <option value="unSettled">unSettled</option>
          </select>
        </div>
      </div>
      <div className="tableBig">
        <div className="tableHead">
          <div className="circleDiv">Item type</div>
          <div className="price">Price</div>
          <div className="transaction">Transaction No</div>
          <div className="time">Time</div>
        </div>
        <ul className="tableUL">{rows}</ul>

        <Pagination
          dataPerPage={dataPerPage}
          totaltableData={tableData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        {/* <section className="bootstrap"> */}
        {/* <span>
            showing {indexOfFirstData + 1} to {indexOfLastData + 1} of{" "}
            {tableData.length} entries
          </span> */}

        {/* <Pagination
            activePage={currentPage}
            itemsCountPerPage={dataPerPage}
            totalItemsCount={tableData.length}
            pageRangeDisplayed={2}
            hideFirstLastPages
            prevPageText="Previous"
            nextPageText="Next"
            itemClass="page-item"
            linkClass="page-link"
            onChange={paginate}
          /> */}
        {/* </section> */}
        {/* <div className="tableFooter"></div> */}
      </div>
    </>
  );
}

export default TableCustome;

const Section = styled.section`
  margin-top: 1.25rem;
  & section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 17px;
      color: #000000;
    }
    & ul {
      display: flex;
      border-radius: 2px;
    }
    & li {
      list-style: none;
      box-sizing: border-box;
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 17px;
      padding: 5px 12px;
      border: 1px solid #ced0da;
      color: #000000;
    }
    & li a {
      text-decoration: none;
      color: #000000;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.563rem;
  & th,
  td {
    padding: 0.75rem 1.563rem;
    border: none;
  }
  & th {
    text-align: left;
    background: #eaeef0;
  }
  & td {
    background: #fff;
    border-bottom: 0.0625rem solid #cccfd4;
  }
  & td:first-child {
    display: flex;
    border-bottom: 0.0625rem solid #cccfd4;
  }
  & h4 {
    display: inline;
  }
  & img {
    margin-right: 25px;
  }
`;
