import React from "react";
import PageWrapper from "@/components/Page-Wrapper/Page-Wrapper";
import fakeProductsData from "@/utils/table-data/MOCK_PRODUCTS_DATA .json";
import { DataTable } from "@/components/react-table/main-table";
import { productColumns } from "./prod-column";

async function getData() {
  const Data = fakeProductsData.map((d) => {
    return d;
  });

  return Data;
}

export default async function ProductsPage() {
  const prodData = await getData();

  return (
    <>
      <PageWrapper>
        <div className="relative ">
          <DataTable columns={productColumns} data={prodData} />
        </div>
      </PageWrapper>
    </>
  );
}
