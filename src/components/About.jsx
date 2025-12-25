export default function About() {
  return (
    <div className="about-me">
      <div className="about-me-contants">
        <img src="public\me.png" alt="an illustartion photo from me" />

        <div className="description">
          <p>
            Hi, I’m Bahar. I’ve completed several online character design and
            illustration classes, also recently passed a (vis_dev) course at
            Inverse school.
          </p>
          <p>
            I’ve always been captivated by creating new characters,
            incorporating vibrant and whimsical atmospheres to bring new stories
            to life.
          </p>
          <p>
            I’m eager to gain new experiences and i would love to collaborate on
            the journey of creating unique characters and environments with you!
          </p>
        </div>
      </div>
      <div className="social-links">
        <a
          href="http://www.linkedin.com/in/bahar-eghterafi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="/contact">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
