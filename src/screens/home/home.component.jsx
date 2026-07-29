import { Hero } from "../../components/hero/hero.component";
import { Header } from "../../components/header/header.component";
import { ProductFramework } from "../../components/product_framework/product_framework.component";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductFramework />
    </>
  );
};
