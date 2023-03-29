import React, { useMemo, useCallback, useState, useEffect } from "react";
 
export const useContactTable = (data) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const sortBy = "last_name";
 
  const rows = useMemo(() =>
    data
      .filter((item) => {
        const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
        return fullName.includes(searchInput.toLowerCase());
      })
      .sort((a, b) => {
        const aValue = a[sortBy] || '';
        const bValue = b[sortBy] || '';
        return aValue.localeCompare(bValue);
      }), [data, searchInput]);
 
  const toggleRow = useCallback((id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((selectedIds) => selectedIds !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  }, [selectedRows]);
 
  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);
 
  const rowRenderer = useCallback( ({ key, index, style }) => {
    const {first_name, last_name, email, avatar, id} = rows[index];
    const isSelected = selectedRows.includes(id);
 
    return (
      <div className="ExampleTableRow" key={key} style={style} onClick={() => toggleRow(id)}
      >
        <div className="ExampleTableColumn">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="ExampleTableColumn">{first_name}</div>
        <div className="ExampleTableColumn">{last_name}</div>
        <div className="ExampleTableColumn">{email}</div>
        <div>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleRow(id)}
          />
        </div>
      </div>
    );
  }, [rows, selectedRows, toggleRow]);
 
  const renderHeaderCell = useCallback(({ dataKey }) => {
    return (
      <div key={dataKey}>
        Last Name
      </div>
    );
  }, []);
 
  const rowGetter = useCallback(({ index }) => rows[index], [rows]);
 
  return {
    searchInput,
    setSearchInput,
    rowRenderer,
    rows,
    rowGetter,
    renderHeaderCell,
    sortBy
  }
}
