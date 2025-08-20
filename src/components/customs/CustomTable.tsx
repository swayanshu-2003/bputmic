"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CustomTableProps {
  data: Record<string, any>[];
}

const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
  if (data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  const columns = Object.keys(data[0]); // Extract column headers dynamically

  return (
    <div className="w-full overflow-x-auto">
      <Table className="border border-indigo-100">
        <TableHeader>
          <TableRow className="bg-blue-50">
            {columns.map((col, index) => (
              <TableHead
                key={index}
                className="text-left text-primary-blue font-semibold capitalize"
              >
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="hover:bg-gray-50">
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex} className="text-left">
                  {row[col] || "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
