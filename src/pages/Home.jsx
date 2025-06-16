import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import { Container, Col, Row } from "reactstrap";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";
import Services from "..//service/Services";
import ProductsList from "../components/UI/ProductsList";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import { useState, useEffect } from "react";
const Home = () => {
  const [trendingproducts, setTrendingproducts] = useState([]);
  const [bestSalesproducts, setBestSalesproducts] = useState([]);
  const [mobileproducts, setMobileproducts] = useState([]);
  const [wirelleproducts, setwirelleproducts] = useState([]);
  const [popularproducts, setPopularproducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filterBestProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filterWirellProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filterPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingproducts(filterTrendingProducts);
    setBestSalesproducts(filterBestProducts);
    setMobileproducts(filterMobileProducts);
    setwirelleproducts(filterWirellProducts);
    setPopularproducts(filterPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/Shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingproducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesproducts} />
          </Row>
        </Container>
      </section>
      <section className="item_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-3">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-4">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/Shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileproducts} />
            <ProductsList data={wirelleproducts} />
          </Row>
        </Container>
      </section>
      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularproducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
