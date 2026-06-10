import {
  FaBlog,
  FaUsers,
  FaLayerGroup,
  FaPlus,
  FaImage,
  FaPen,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

import styles from "./QuickActions.module.css";

const actions = [
  { icon: <FaBlog />, title: "Add Blog" },
  { icon: <FaUsers />, title: "Add User" },
  { icon: <FaLayerGroup />, title: "Category" },
  { icon: <FaPlus />, title: "Policy" },
  { icon: <FaImage />, title: "Hero" },
  { icon: <FaPen />, title: "Footer" },
  { icon: <FaGlobe />, title: "Header" },
  { icon: <FaStar />, title: "Review" },
];

export default function QuickActions() {
  return (
    <div className={styles.card}>
      <h3>Quick Actions</h3>

      <div className={styles.grid}>
        {actions.map((item) => (
          <button
            key={item.title}
            className={styles.action}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}