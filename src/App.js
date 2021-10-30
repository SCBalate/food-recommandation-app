import "./styles.css";
import react, { useState } from "react";
const foodDB = {
  Starter: [
    {
      name: "Paneer Tikka",
      ratings: "5.0/5.0",
      desc: "This is a popular starter like by paneer lovers",
      image:
        "https://www.pngitem.com/pimgs/m/215-2157352_paneer-tikka-images-png-transparent-png.png"
    },
    {
      name: " Dahi Wada",
      ratings: "4.9/5.0",
      desc: "This is a sweet starter like by sweet lovers",
      image:
        "https://thumbs.dreamstime.com/b/tasty-banana-dahi-vada-indian-food-made-vadas-dipped-thick-curd-32488736.jpg"
    },
    {
      name: "Methi Muthia",
      ratings: "4.0/5.0",
      desc: "This is a Gujarathi starter like by many peoples",
      image:
        "https://www.tarladalal.com/members/9306/big/big_lapsi_methi_muthia_(_non-_fried_snacks_)-14662.jpg?size=696X905"
    },
    {
      name: "Soyabeen Chilli",
      ratings: "4.5/5.0",
      desc: "This is a tipical chinease starter liked by chinease food lovers",
      image: "https://i.ytimg.com/vi/nYYo5p7g5D4/maxresdefault.jpg"
    },
    {
      name: "Masala Papad",
      ratings: "5.0/5.0",
      desc: "This is a popular Indian starter liked by most of the Indians.",
      image:
        "https://thumbs.dreamstime.com/b/masala-papad-indian-traditional-healthy-snacks-food-51973791.jpg"
    }
  ],
  MainCourse: [
    {
      name: "Paneer Masala",
      ratings: "5.0/5.0",
      desc:
        "This is a popular Indian curry liked by most of the Paneer lovers.",
      image:
        "https://madscookhouse.com/wp-content/uploads/2020/10/Paneer-Butter-Masala-Nut-Free-1024x516.jpg"
    },
    {
      name: "Palak Paneer",
      ratings: "4.0/5.0",
      desc: "This is a healthy and nutrition rich curry choice of many moms ",
      image:
        "https://thumbs.dreamstime.com/b/palak-paneer-traditional-popular-indian-dish-spinach-cheese-37177993.jpg"
    },
    {
      name: "Chiken Curry",
      ratings: "5.0/5.0",
      desc:
        "This is a popular non-veg Indian curry liked by most of the chicken lovers.",
      image:
        "https://thumbs.dreamstime.com/b/chicken-curry-indian-dish-red-41886544.jpg"
    },
    {
      name: "Shahi Paneer",
      ratings: "4.8/5.0",
      desc: "Shahi logon ki shahi pasand.",
      image:
        "https://thumbs.dreamstime.com/b/indian-food-specialties-dish-kadai-shahi-paneer-lababda-105552997.jpg"
    },
    {
      name: "Kaju Curry",
      ratings: "4.8/5.0",
      desc:
        "This is a popular Indian curry liked by most of the Dry-fruit lovers.",
      image:
        "https://img-global.cpcdn.com/recipes/3a1be17677ce171d/1200x630cq70/photo.jpg"
    }
  ],
  Dessert: [
    {
      name: "Brownnies",
      ratings: "5.0/5.0",
      desc: "This is a sweet chocklate dessert liked by chocklate ;overs.",
      image:
        "https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Ice Cream",
      ratings: "5.0/5.0",
      desc: "This is a popular cold dessert loved by most of the childrens.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.-JgfQUu5SMRzlSIiTAJjXAHaGj&pid=Api&P=0&w=192&h=171"
    },
    {
      name: "Fudge",
      ratings: "4.0/5.0",
      desc: "This is a popular Indian dessert  also called as Barfi.",
      image:
        "data:image/jpeg;base64,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"
    },
    {
      name: "Apple Pie",
      ratings: "4.5/5.0",
      desc: "This is a sweet and nice pie made from apple.",
      image:
        "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    }
  ]
};
export default function App() {
  const [selectType, setType] = useState("Starter");
  function foodClickHandler(type) {
    setType(type);
  }
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
      </style>
      <h1>Food Mania</h1>
      <p>
        Check out your faviurite food items and select the type to get started
      </p>

      <div>
        {Object.keys(foodDB).map((type) => (
          <button onClick={() => foodClickHandler(type)}>{type}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectType].map((food) => (
            <li key={food.name}>
              {" "}
              <div style={({ fontSize: "larger" }, { margin: "1px" })}>
                {" "}
                {food.name}{" "}
              </div>
              <div style={({ fontSize: "5em" }, { marginBottom: "1px" })}>
                {" "}
                {food.ratings}{" "}
              </div>
              <div style={({ fontSize: "3.5em" }, { marginBottom: "0px" })}>
                {" "}
                {food.desc}{" "}
              </div>
              <img alt="food-pics" src={food.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
