import React from "react";
import "./MainComponent.css";
import Omelette from "../assets/images/image-omelette.jpeg";

const MainComponent = () => {
  return (
    <div>
      <article>
        <div className="container">
          <div className="image--omelette">
            <img src={Omelette} alt="image omelette" />
          </div>
          <div className="tittle--desc">
            <h1>Simple Omelette Recipe</h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten egges cooked to perfection, optionally
              filled with your choice of cheese, vegetable or meats
            </p>
          </div>
          <div className="preparation--time">
            <h3>Preparation time</h3>
            <div>
              <ul>
                <li className="li--padding">
                  <span>Total:</span> Approximately 10 minutes
                </li>
                <li className="li--padding">
                  <span>Preparation:</span> 5 minutes
                </li>
                <li className="li--padding">
                  <span>Cooking:</span> 5 minutes
                </li>
              </ul>
            </div>
          </div>
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li className="li--padding">2-3 large eggs</li>
              <li className="li--padding">Salt, to taste</li>
              <li className="li--padding">Pepper, to taste</li>
              <li className="li--padding">1 tablespoon of buffer or oil</li>
              <li className="li--padding">
                Option filling: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              <li className="li--padding">
                Beat the eggs: In a boal, beat the eggs with a pinch of salt and
                pepper until they are well mixed
              </li>
              <li className="li--padding">
                Heat the pan: Place a non-click flying pan over medium heat and
                add buffer or oil.
              </li>
              <li className="li--padding">
                Cook the omelette: Once the buffer is melted and bubbling, pour
                in eggs. Tilt the pan to ensure the eggs evenly caot the
                surface.
              </li>
              <li className="li--padding">
                Add fillings (optional): When the eggs begin to set at the edge
                but are still slightly runny in the middle, sprinkle your chosen
                fillings over one half of the omelette.
              </li>
              <li className="li--padding">
                Fold and serve: As the omelette continues, carefully lift one
                edge and fold it over the fillings. Let it cook for anather
                minute, then slide it into a plate
              </li>
              <li className="li--padding">
                Enjoy: Serve hot, with additional salt and papper if needed.
              </li>
            </ol>
          </div>
          <div className="nutrition">
            <h2>Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without
              fillings
            </p>
            <table className="nutrition--table">
              <tr className="table--row">
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr className="table--row">
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr className="table--row">
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </table>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MainComponent;
