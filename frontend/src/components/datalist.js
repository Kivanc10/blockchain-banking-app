import { Table } from "antd";
import qs from "qs";
import "./css/dashboard.css";
import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useCallback,
} from "react";
import { BankingContext } from "../context/BankingContext";
let columns;

// const getRandomuserParams = (params) => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });

const DataList = ({ transactions,type}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    pageSizeOptions: [10, 20, 30],
    current: 1,
    pageSize: 10,
  });

  //const [tsData, setTsData] = useState([]);
  const { formatEther } = useContext(BankingContext);

  const convertDataSource = (arr) => {
    let data = [];
    if (type === "transaction") {
      for (let i = 0; i < arr.length; i++) {
        let trDate = new Date(arr[i].timestamp * 1000);
        let tempObj = {
          key: i,
          date: trDate.toLocaleString(),
          receiver: arr[i].receiver,
          sender: arr[i].sender,
          amount: formatEther(arr[i].amount.toString()) + " ETH",
        };
        data.push(tempObj);        
      }
      columns = [
        {
          title: "Receiver",
          dataIndex: "receiver",
          sorter: false,
          // render: (name) => `${name.first} ${name.last}`,
          // render: (name) => `${name.sender}`,
          width: "25%",
        },
        {
          title: "Sender",
          dataIndex: "sender",
          sorter: false,
          // render: (name) => `${name.first} ${name.last}`,
          // render: (name) => `${name.sender}`,
          width: "25%",
        },
        {
          title: "Transaction Amount",
          dataIndex: "amount",
          width: "20%",
        },
        {
          title: "Date",
          dataIndex: "date",
          width: "30%",
        },
      ];
    }else if (type === "userList") {
      console.log("data ----> ", arr)
      for (let i = 0;i<arr.length;i++) {
        let trDate = new Date(arr[i].data.createdTime * 1000);
        let tempObj = {
          key: i,
          date: trDate.toLocaleString(),
          name: arr[i].data.name,
          address : arr[i].address
        };
        data.push(tempObj);
      }
      columns =  [
        {
          title: "Name",
          dataIndex: "name",
          sorter: false,
          // render: (name) => `${name.first} ${name.last}`,
          // render: (name) => `${name.sender}`,
          width: "25%",
        },
        {
          title: "Address",
          dataIndex: "address",
          sorter: false,
          // render: (name) => `${name.first} ${name.last}`,
          // render: (name) => `${name.sender}`,
          width: "45%",
        },       
        {
          title: "Created Date",
          dataIndex: "date",
          width: "30%",
        },
      ];
    }
  
    return data;
  };

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

export default DataList;
