import Image from "next/image";
export function AdvertSect({ children, icon }) {
  return (
    <div className="col-lg-4 card-item-cont">
      <div className="card-item">
        <div className="advert-icon">
          <div style={{ width: "30px", height: "30px" }}>
            <Image width={30} height={30} src={`/images/${icon}`} alt={icon} />
          </div>
          {/* <img width="30px" height="30px" src={`/images/${icon}`} alt={icon} /> */}
        </div>
        {children}
      </div>
    </div>
  );
}
