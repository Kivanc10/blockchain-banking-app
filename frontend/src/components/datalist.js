import { Table } from "antd";
import qs from "qs";
import "./css/dashboard.css";
import React, { useEffect, useState } from "react";
const columns = [
  {
    title: "Transaction ID",
    dataIndex: "name",
    sorter: false,
    render: (name) => `${name.first} ${name.last}`,
    width: "50%",
  },
  {
    title: "Transaction Amount",
    dataIndex: "gender",
    width: "30%",
  },
  {
    title: "Date",
    dataIndex: "email",
  },
];

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    pageSizeOptions:[10,20,30],
    current: 1,
    pageSize: 10,
  });

  const fetchData = (params = {}) => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setPagination({
          ...params.pagination,
          total: 200, // 200 is mock data, you should read it from server
          // total: data.totalCount,
        });
      });
  };

  useEffect(() => {
    fetchData({
      pagination,
    });
  }, []);

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: newPagination,
      ...filters,
    });
  };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default App;
