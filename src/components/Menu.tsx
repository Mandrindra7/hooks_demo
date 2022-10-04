import { useState } from "react";
import arrow from "../assets/icons8-arrow-24.png";
import arrowBack from "../assets/left-arrow.png";
import { dataKey } from "../data/Menu";

import "../assets/menu.css";

const Menu = (props: any) => {
  const { menu, onFilter } = props;
  const [type, setType] = useState("principal");
  const [last, setLast] = useState(0);

  const changeType = (filter: string) => {
    setType(filter);
    setLast(last + 1);
    onFilter(filter);
  };

  const goBack = () => {
    setLast(last - 1);
    const res = dataKey[0].filter((item, index) => index === last - 1);
    onFilter(res.shift());
  };

  return (
    <div className="menu">
      <ul className="list">
        {type === "principal" || last === 0 ? (
          <li className="list-item">designplox</li>
        ) : (
          <li className="list-item">
            <img className="icon" src={arrowBack} onClick={() => goBack()} />
          </li>
        )}
        {menu &&
          menu[0].map((item: any) => (
            <li className="list-item" key={item.id}>
              {item.name}
              {dataKey[0].includes(item.name) && (
                <img className="icon" src={arrow} onClick={() => changeType(item.name)} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
