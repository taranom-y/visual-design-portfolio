import { IllustrationList } from "../utils/IllustrationList";
export default function Illustration() {
  return (
    <div className="image-wrapper">
      <div className="illustration-img-list">
        {IllustrationList.map((pic, index) => (
          <img
            key={pic.id}
            src={pic.image}
            alt={pic.title}
            loading="lazy"
            style={{ "--delay": `${index * 0.9}s` }}
          />
        ))}
      </div>
      <div className="overlay" />
    </div>
  );
}
