import CategoryCardComponent from "../components/CategoryCardComponent";
import ProductCarouselComponent from "../components/ProductCarouselComponents";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
const HomePage = () => {
    const categories = [
        "games",
        "monitors",
        "tablets",
        "games",
        "monitors",
        "tablets",
        "games"
    ];

    return (
        <>
            <ProductCarouselComponent />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {categories.map((category, idx) => (
                        <CategoryCardComponent key={idx} category={category} idx={idx} />
                    ))}
                </Row>
            </Container>

        </>
    );
};
export default HomePage;