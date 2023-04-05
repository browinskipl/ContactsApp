import React from "react";
import { Table, AutoSizer } from "react-virtualized";
import { useContactTable } from "../../hooks/useContactTable";
import "react-virtualized/styles.css";
import Input from "../Input/Input";
import Card from "../Card/Card";

const TableWrapper = ({ data }) => {
  const { searchInput, setSearchInput, rowRenderer, rows, rowGetter, sortBy } =
    useContactTable(data);

  return (
    <div style={{ height: "100vh" }}>
      <Card
        content={
          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        }
      />
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            rowRenderer={rowRenderer}
            rowCount={rows.length}
            headerHeight={30}
            rowHeight={40}
            rowGetter={rowGetter}
            sortBy={sortBy}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default TableWrapper;
