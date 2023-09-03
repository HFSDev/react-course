import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Banner from "./components/banner/Banner";
import SidewaysList from "./components/sideways_list/SidewaysList";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

const listItems = concepts.map((concept) => {
  return {
    image: {
      img: concept.image,
      imgAlt: concept.title,
    },
    title: concept.title,
    description: concept.description,
  };
});

function App() {
  const banner = {
    image: {
      path: keyConceptsImage,
      alt: "Medal badge with a star",
    },
    title: "Key React Concecpts",
    text: "Selected key React concepts you should know about",
  };
  return (
    <div>
      <Banner img={banner.image} title={banner.title} text={banner.text} />
      <SidewaysList items={listItems} />
    </div>
  );
}

export default App;
