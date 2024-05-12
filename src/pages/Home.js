import React, { lazy, Suspense } from "react";

const CategoriesCard = lazy(() =>
  import("../components/categoriesCard/CategoriesCard")
);
const Sliderdiv = lazy(() => import("../components/SliderDiv/Sliderdiv"));
const ProductsGroup = lazy(() =>
  import("../components/productsSlidable/productGroup/ProductsGroup")
);
const CommonProductsCont = lazy(() =>
  import("../components/CommonProductsCont/CommonProductsCont")
);
const BrandsCard = lazy(() => import("../components/brandsCard/BrandsCard"));

const Home = () => {
  return (
    <div className="centercont">
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesCard />
        <Sliderdiv />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsGroup />
        <CommonProductsCont WidthIdea={"Fullwidth"} />
        <BrandsCard />
      </Suspense>
    </div>
  );
};

export default Home;
