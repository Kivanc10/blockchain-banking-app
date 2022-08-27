import { Table } from "antd";
import qs from "qs";
import "./css/dashboard.css";
import React, { useEffect, useState, useContext, useRef, useCallback } from "react";
import { BankingContext } from "../context/BankingContext";
const columns = [
  {
    title: "receiver",
    dataIndex: "receiver",
    sorter: false,
    // render: (name) => `${name.first} ${name.last}`,
    // render: (name) => `${name.sender}`,
    width: "50%",
  },
  {
    title: "sender",
    dataIndex: "sender",
    sorter: false,
    // render: (name) => `${name.first} ${name.last}`,
    // render: (name) => `${name.sender}`,
    width: "50%",
  },
  {
    title: "Transaction Amount",
    dataIndex: "amount",
    width: "30%",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
];

// const getRandomuserParams = (params) => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });





const App = ({transactions}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    pageSizeOptions: [10, 20, 30],
    current: 1,
    pageSize: 10,
  });


  //const [tsData, setTsData] = useState([]);
  const {  formatEther } = useContext(BankingContext);


  const convertDataSource = (arr) => {
    let data = []
    for (let i = 0; i < arr.length; i++) {
      let tempObj = {
        key: i,
        date: arr[i].timestamp.toString(),
        receiver: arr[i].receiver,
        sender: arr[i].sender,
        amount: formatEther(arr[i].amount.toString()) + ""
      }
      data.push(tempObj)
    }
    return data;
  }


  // const fetchData = (params = {}) => {
  //   setLoading(true);
  //   fetch(
  //     `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
  //   )
  //     .then((res) => res.json())
  //     .then(({ results }) => {
  //       setData(results);
  //       setLoading(false);
  //       setPagination({
  //         ...params.pagination,
  //         total: 200, // 200 is mock data, you should read it from server
  //         // total: data.totalCount,
  //       });
  //     });
  // };

  let isSubscr = true;

  // useEffect(() => {
  //   const load = async () => {
  //     let ts = await getTransactionHistory()
  //     while (ts === undefined) {
  //       ts = await getTransactionHistory()
  //     }
  //     //setTransactions(ts)
     
  //     console.log(ts)
  //     if (ts.length !== 0) {
  //       setTransactions(ts);
  //     }
  //   }
  //   load().catch((e) => console.log("my error ----> ",e.message))

  //   return () => transactions.length = 0

  // }, [transactions]);

  // const handleTableChange = (newPagination, filters, sorter) => {
  //   fetchData({
  //     sortField: sorter.field,
  //     sortOrder: sorter.order,
  //     pagination: newPagination,
  //     ...filters,
  //   });
  // };

  return (
    <Table
      columns={columns}
      rowKey={(x) => x.key}
      dataSource={convertDataSource(transactions)}
      // pagination={pagination}
      loading={loading}
    //onChange={handleTableChange}
    />
  );
};

export default App;
