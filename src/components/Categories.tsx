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
                <a key={category.id} href={`/categories/${category.id}`} className="badge bg-secondary me-2 mb-2">{category.name}</a>
            ))
        }
        </>
    );
}