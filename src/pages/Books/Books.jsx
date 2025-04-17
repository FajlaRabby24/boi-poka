import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Navbar from "../../components/Navbar/Navbar";
import ReadTabPanel from "./ReadTabPanel/ReadTabPanel";
import WishListTabPanel from "./WishListTabPanel/WishListTabPanel";

const Books = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-10 bg-[#f3f3f3] flex items-center justify-center max-w-7xl mx-auto rounded-xl mt-5">
        <h3 className="text-2xl font-semibold">Books</h3>
      </div>
      <main className="max-w-7xl mx-auto mt-4 mb-20">
        <div className=" text-right">
          <details className="dropdown">
            <summary className="btn m-1">Sort</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a>by page</a>
              </li>
              <li>
                <a>by ratings</a>
              </li>
            </ul>
          </details>
        </div>
        <Tabs>
          <TabList>
            <Tab>Read</Tab>
            <Tab>WishList</Tab>
          </TabList>

          <TabPanel>
            <ReadTabPanel></ReadTabPanel>
          </TabPanel>
          <TabPanel>
            <WishListTabPanel></WishListTabPanel>
          </TabPanel>
        </Tabs>
      </main>
    </div>
  );
};

export default Books;
