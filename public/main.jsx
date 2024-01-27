import React from "react";
import Omelette from "../src/assets/images/image-omelette.jpeg";

function MainComponent() {
  return (
    <article>
      <div className="image--omelette">
        <img src={Omelette} alt="image omelette" />
      </div>
      <div className="tittle--desc">
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten egges cooked to perfection, optionally filled with
          your choice of cheese, vegetable or meats
        </p>
      </div>
      <div className="preparation--time">
        <h3>Preparation time</h3>
        <ul>
          <li>Total: Approximately 10 minutes</li>
          <li>Preparation: 5 minutes</li>
          <li>Cooking: 5 minutes</li>
        </ul>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of buffer or oil</li>
          <li>Option filling: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <ol>
          <li>
            1. Beat the eggs: In a boal, beat the eggs with a pinch of salt and
            pepper until they are well mixed
          </li>
          <li>
            2. Heat the pan: Place a non-click flying pan over medium heat and
            add buffer or oil.
          </li>
          <li>
            3. Cook the omelette: Once the buffer is melted and bubbling, pour
            in eggs. Tilt slightly runny in the middle, sprinkle your chosen
            fillings over one half of the omelette.
          </li>
          <li>
            4. Fold and serve: As the omelette continues, carefully lift one
            edge and fold it over the fillings. Let it cook for anather minute,
            then slide it into a plate
          </li>
          <li>
            5. Enjoy: Serve hot, with additional salt and papper if needed.
          </li>
          <li></li>
        </ol>
      </div>
      <div className="nutrition">
        <div className="calories"></div>
        <div></div>
        <div></div>
      </div>
    </article>
  );
}

export default MainComponent;
