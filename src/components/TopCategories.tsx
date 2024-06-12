const categories = [
  {
    id: 4,
    name: "Entertainment",
  },
  {
    id: 6,
    name: "Games",
  },
  {
    id: 8,
    name: "Moderation and Tools",
  },
  {
    id: 9,
    name: "Social",
  },
  {
    id: 10,
    name: "Utilities",
  },
];
export default function TopCategories() {
  return (
    <ul className="nav nav-tabs justify-content-center">
      {categories.map((category) => (
        <li className="nav-item">
          <a href={`/categories/${category.id}`} className="nav-link">
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
