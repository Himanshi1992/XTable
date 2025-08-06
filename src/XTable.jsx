import React, {useState} from "react";

function XTable(){
const[data, setData] = useState([{ date: "2022-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-01", views: 100, article: "Article 1" },
      { date: "2023-09-02", views: 150, article: "Article 2" },
      { date: "2023-09-02", views: 120, article: "Article 3" },
      { date: "2020-09-03", views: 200, article: "Article 4" }
    ]);
const sortByDate = () => {
    const sorted = [...data].sort((a,b) => {
        if(b.date === a.date){
            return b.views - a.views;
        }
        return new Date(b.date) - new Date(a.date);
    });
    setData(sorted);
}
const sortByViews = () => {
    const sorted = [...data].sort((a,b) =>{
        if(b.views === a.views){
           return new Date(b.date) - new Date(a.date);
        }
        return b.views - a.views;
    });
    setData(sorted);
}
return(
    <div>
        <h1>Date and Views Table</h1>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => 
                <tr key={`${row.article}-${row.date}`}>
                    <td>{row.date}</td>
                    <td>{row.views}</td>
                    <td>{row.article}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
);
}
export default XTable;