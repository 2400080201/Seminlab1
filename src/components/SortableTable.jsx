import React, { useState } from "react";

const SortableTable = () => {
  // Predefined employee data
  const employeeData = [
    { name: "Aishu", department: "Finance", salary: 45000 },
    { name: "Rohan", department: "IT", salary: 60000 },
    { name: "Meena", department: "HR", salary: 40000 },
    { name: "Karan", department: "Marketing", salary: 55000 },
  ];

  // useState to manage sorting
  const [data, setData] = useState(employeeData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Sort function
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Sortable Employee Table</h2>
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th
              className="p-2 border cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
            </th>
            <th
              className="p-2 border cursor-pointer"
              onClick={() => handleSort("department")}
            >
              Department {sortConfig.key === "department" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
            </th>
            <th
              className="p-2 border cursor-pointer"
              onClick={() => handleSort("salary")}
            >
              Salary {sortConfig.key === "salary" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr
              key={index}
              className={"hover:bg-blue-100 " + (index % 2 === 0 ? "bg-gray-50" : "bg-white")}
            >
              <td className="p-2 border">{emp.name}</td>
              <td className="p-2 border">{emp.department}</td>
              <td className="p-2 border">₹{emp.salary.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
