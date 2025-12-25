import { IllustrationList } from "../utils/IllustrationList";
export default function Illustration() {
  return (
    <>
      <div className="illustration-img-list">
        {IllustrationList.map((pic, index) => (
          <img
            key={pic.id}
            src={pic.image}
            alt={pic.title}
            loading="lazy"
            style={{ "--delay": `${index * 1.2}s` }}
          />
        ))}
      </div>
    </>
  );
}
