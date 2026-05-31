import foods from "../data/foods";
import FoodCard from "../components/FoodCard";

function Home({ addToCart }) {
  return (
    <div className="menu">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;