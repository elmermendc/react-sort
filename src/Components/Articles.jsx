import React from "react";

function Articles({ articles }) {
   
  return (
    <div className="card w-50 mx-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Upvotes</th>
            <th className="px-6 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((ar) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={ar.title}>
                <td className="px-6 py-4">{ar.title}</td>
                <td className="px-6 py-4">{ar.upvotes}</td>
                <td className="px-6 py-4">{ar.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
