export default function FeaturedCategory() {
  return (
    <div className="custom-container my-5 d-flex justify-content-between">
      {[1, 2, 3].map((each, index) => (
        <div key={index} className="featuredCategory my-5">
          <div className="featuredCategory-item"></div>
          <div className="card-body my-3">
            <div className="card-title text-center" tag="h5">
              <b>Card Title</b>
            </div>
            <div className="card-text text-center">
              <p>This is some text within a card body.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
