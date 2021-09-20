export function AdvertSect({ children, icon }) {
  return (
    <div className="col-lg-4 card-item-cont">
      <div className="card-item">
        <div className="advert-icon">
          <img width="30px" height="30px" src={`/images/${icon}`} alt={icon} />
        </div>
        {children}
      </div>
    </div>
  );
}
