/** @format */

export const Card = ({ img, title, description, base_scale = 1 }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card dbm_card bg-light">
        <div className="card-body text-center">
          <div
            className="rounded-circle mb-3
          mx-auto"
            style={{ width: 128, height: 128, overflow: "hidden" }}
          >
            <img
              src={img}
              className="rounded-circle mb-3"
              alt=""
              style={{
                width: 128,
                height: 128,
                objectFit: "cover",
                transform: `scale(${base_scale})`,
              }}
            />
          </div>
          <h3 className="card-title mb-3">{title}</h3>
          <p className="card-text">{description}</p>
          <a href="#instructor_twitter">
            <i className="bi bi-twitter text-dark mx-1"></i>
          </a>
          <a href="#instructor_facebook">
            <i className="bi bi-facebook text-dark mx-1"></i>
          </a>
          <a href="#instructor_linkedin">
            <i className="bi bi-linkedin text-dark mx-1"></i>
          </a>
          <a href="#instructor_instagram">
            <i className="bi bi-instagram text-dark mx-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
