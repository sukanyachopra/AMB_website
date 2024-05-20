import "../../pages/resources/Resources.css";

import cardData from "../../data/CardData";

function ListOfContent() {
  return (
    <>
      <div>
        <h3 className="right-module-title">COMMUNICATION MATERIALS</h3>
        <div className="tab-content">
          {cardData.map((data) => {
            return (
              <>
                <div key={data.cardSubHeading + data.cardHeading}>
                  <h5
                    className="tab-heading"
                    id={data.id ? data.id : data.cardSubHeading}
                  >
                    {data.cardHeading}
                  </h5>
                  <div className="tab-container">
                    <div className="tab-container-heading">
                      {data.cardSubHeading}
                    </div>
                    <div className="card-container">
                      {data.cardDetails.map((e) => {
                        return (
                          <>
                            <div className="tab-container-card" key={e.text}>
                              <div className="tab-card-top">{e.text}</div>
                              <a
                                download={e.download}
                                href={e.href}
                                title={e.title}
                                target="blank"
                              >
                                <img
                                  className="tab-image"
                                  src={e.src}
                                  alt="download"
                                />
                              </a>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListOfContent;
