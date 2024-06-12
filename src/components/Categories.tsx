import { Link } from "react-router-dom";
import type  { Category } from "../discord";
export default function Categories({
    categories,
    }: {
    categories: Category[];
    }) {
    return (
        <>
        {
            categories.map((category) => (
                <Link key={category.id} to={`/categories/${category.id}`} className="badge bg-secondary me-2 mb-2">{category.name}</Link>
            ))
        }
        </>
    );
}