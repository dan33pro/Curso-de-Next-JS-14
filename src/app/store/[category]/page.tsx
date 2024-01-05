interface CategoryProps {
    params: {
        category: string,
    },
};

export default function Category(props: CategoryProps) {
    let { category } = props.params;

    return (
        <h1>Categoría dinamica: {category}</h1>
    );
};