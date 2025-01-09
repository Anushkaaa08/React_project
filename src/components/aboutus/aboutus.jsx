import React, { useState } from "react";
import style from "../../assets/styles/aboutus.module.css";
 
export default function AboutUs() {
  const [expanded, setExpanded] = useState(null);
 
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };
 
  const sections = [
    {
      title: "Our destinations",
      description:
        "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit odio alias, fugit ad doloremque rerum ipsa, velit enim ducimus iure saepe similique! Dolore sint similique, debitis voluptates minima itaque? Consequatur repellat exercitationem sed recusandae reprehenderit, inventore quam fugit sint neque at eos illo natus molestiae error laudantium accusantium! Dolore!",
      image:
        "https://imgs.6sqft.com/wp-content/uploads/2022/01/02101706/Magnolia-Bakery-Hudson-Yards.jpeg",
    },
    {
      title: "Our Partners",
      description:
        "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit odio alias, fugit ad doloremque rerum ipsa, velit enim ducimus iure saepe similique! Dolore sint similique, debitis voluptates minima itaque? Consequatur repellat exercitationem sed recusandae reprehenderit, inventore quam fugit sint neque at eos illo natus molestiae error laudantium accusantium! Dolore!",
      image:
        "https://imgs.6sqft.com/wp-content/uploads/2022/01/02101706/Magnolia-Bakery-Hudson-Yards.jpeg",
    },
    {
      title: "Our Community",
      description:
        "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit odio alias, fugit ad doloremque rerum ipsa, velit enim ducimus iure saepe similique! Dolore sint similique, debitis voluptates minima itaque? Consequatur repellat exercitationem sed recusandae reprehenderit, inventore quam fugit sint neque at eos illo natus molestiae error laudantium accusantium! Dolore!",
      image:
        "https://imgs.6sqft.com/wp-content/uploads/2022/01/02101706/Magnolia-Bakery-Hudson-Yards.jpeg",
    },
    {
      title: "Our Planet",
      description:
        "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit odio alias, fugit ad doloremque rerum ipsa, velit enim ducimus iure saepe similique! Dolore sint similique, debitis voluptates minima itaque? Consequatur repellat exercitationem sed recusandae reprehenderit, inventore quam fugit sint neque at eos illo natus molestiae error laudantium accusantium! Dolore!",
      image:
        "https://imgs.6sqft.com/wp-content/uploads/2022/01/02101706/Magnolia-Bakery-Hudson-Yards.jpeg",
    },
  ];
 
  return (
    <div className={`${style.container} bg-orange-100 font-medium text-xl`}>
      <h3 className={style.container_header}>About Us</h3>
      {sections.map((section, index) => (
        <div key={index} className={style.section}>
          <div className={`${style.title}`} onClick={() => toggleExpand(index)}>
            <span>{index + 1} {section.title}</span>
            <span className={style.arrow}>
              {expanded === index ? "↑" : "↓"}
            </span>
          </div>
          <div
            className={`${style.content_wrapper} ${
              expanded === index ? style.expanded : ""
            }`}
          >
            {expanded === index && (
              <div className={style.content}>
                <img
                  src={section.image}
                  alt={section.title}
                  className={style.image}
                />
                <div className={style.desc}>{section.description}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}