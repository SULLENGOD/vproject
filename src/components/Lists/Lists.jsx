import React from "react";
import './Lists.css'

const Lists = () => {
  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Vicio Music</h5>
          <p className="card-text">Sullen Sense:</p>
          <ul className="list-group">
              <li className="list-group-item list-group-item-action list-group-item-dark"><a href="https://soundcloud.com/sullen-sense/he-walks-hes-coming-sullen-sense" id="lnk">He Walks, He's Coming</a></li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><a href="https://soundcloud.com/sullen-sense/impera-sullen-sense" id="lnk">Impera</a></li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><a href="https://soundcloud.com/sullen-sense/cyberia-mind-sullen-original-mix" id="lnk">Cyberia</a></li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><a href="https://soundcloud.com/sullen-sense/dark-energy-dark-beers-sullen-sense-original-mix" id="lnk">Dark Energy, Dark Beers!</a></li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><a href="." id="lnk">Lion Bass</a></li>


          </ul>
        </div>
      </div>
    </>
  );
};

export { Lists };
