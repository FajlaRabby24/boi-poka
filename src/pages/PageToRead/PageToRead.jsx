import React from "react";
import { useLoaderData } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Navbar from "../../components/Navbar/Navbar";

const PageToRead = () => {
  const data = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <main className="max-w-6xl mx-auto my-28">
        <BarChart width={1000} height={450} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="author" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalPages" fill="#fbb929" />
        </BarChart>
      </main>
    </div>
  );
};

export default PageToRead;
