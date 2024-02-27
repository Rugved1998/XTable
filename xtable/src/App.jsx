import React, { useState } from 'react';

export default function App() {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(initialData);
  const [sortByDate, setSortByDate] = useState(false);

  const sortData = () => {
    if (sortByDate) {
      setData([...initialData.sort((a, b) => (a.views > b.views ? -1 : 1))]);
    } else {
      setData([...initialData.sort((a, b) => (a.date > b.date ? -1 : 1) || (a.views > b.views ? -1 : 1))]);
    }
    setSortByDate(!sortByDate);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortData}>Sort by Date</button>
      <button onClick={sortData}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

