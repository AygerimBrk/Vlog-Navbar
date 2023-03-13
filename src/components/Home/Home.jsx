import React from "react";
import CardVlog from "../CardVlog/CardVlog";

let vlog = [
  {
    title: "France",
    image:
      "https://i.pinimg.com/236x/bd/be/c5/bdbec5c62ced507a65b291b78e6b9ad5.jpg",
    category: "LifeStyle",
    content: "Trip with my huby",
    id: 1,
  },
  {
    title: "United State of America",
    image:
      "https://i.pinimg.com/236x/12/cb/df/12cbdfc8d2f937fee93c36f52d6d5cbf.jpg",
    category: "Study",
    content: "My PHD. My life in USA",
    id: 2,
  },
  {
    title: "South Korea",
    image:
      "https://i.pinimg.com/236x/90/d2/ad/90d2ad7f1008f3f4448c0649846c530d.jpg",
    category: "K-pop",
    content: "BTS so popular in CK",
    id: 3,
  },
  {
    title: "Japan",
    image:
      "https://i.pinimg.com/236x/56/01/e7/5601e72265b56929fe04b2a2a72fa37a.jpg",
    category: "Anime",
    content: "In Japan animies so popular",
    id: 4,
  },
  {
    title: "Turkiye",
    image:
      "https://i.pinimg.com/236x/dc/13/10/dc1310682a43dce7ca3a7441285da55e.jpg",
    category: "Food vlog",
    content: "Food vlog from Turkiye . In Turkiye you can try so many foods",
    id: 5,
  },
  {
    title: "Italy",
    image:
      "https://i.pinimg.com/236x/c7/87/a8/c787a896cde61a8b4d6fa4b005ef8741.jpg",
    category: "Tradition",
    content: "In Italy people ate only cheese",
    id: 6,
  },
  {
    title: "Байыш просим проверить все наши таски",
    image:
      "https://i.pinimg.com/236x/a5/ed/0a/a5ed0a6aeede27e1b61cf42a4a42d0ed.jpg",
    category: "Просьба студентов",
    content: "Please",
    id: 6,
  },
];

const Home = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-between container mt-5 flex-wrap-wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          flexWrap: "wrap",
          marginBottom: "5%",
        }}
      >
        {vlog.map((item) => (
          <CardVlog key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
