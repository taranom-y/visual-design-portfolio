import { CharacterList } from "../utils/CharacterList";
export default function CharacterDesign() {
  return (
    <div className="image-wrapper">
      <div className="character-img-list">
        {CharacterList.map((charac, index) => (
          <img
            key={charac.id}
            src={charac.image}
            alt={charac.title}
            style={{ "--delay": `${index * 0.9}s` }}
            loading="lazy"
          />
        ))}
      </div>
      <div className="overlay" />
    </div>
  );
}
