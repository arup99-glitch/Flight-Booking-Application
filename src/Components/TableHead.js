import React from 'react';

const TableHead = () => {
    return (
        <thead className="bg-gray-100/50">
      <tr className="text-black text-left">
        <th>Destination From</th>
        <th>Destination To</th>
        <th className="text-center">Journey Date</th>
        <th className="text-center">Guests</th>
        <th className="text-center">className</th>
        <th className="text-center">Delete</th>
      </tr>
    </thead>
    );
};

export default TableHead;