import React, { useState, useEffect } from "react";

const Home = () => {
  const [loadedComponents, setLoadedComponents] = useState([]);

  useEffect(() => {
    const loadComponent = async (component) => {
      const { default: LazyLoadedComponent } = await component();
      setLoadedComponents((prevComponents) => [
        ...prevComponents,
        <LazyLoadedComponent key={loadedComponents.length} />,
      ]);
    };

    const componentsToLoad = [
      () => import("../components/categoriesCard/CategoriesCard"),
      () => import("../components/SliderDiv/Sliderdiv"),
      () => import("../components/productsSlidable/productGroup/ProductsGroup"),
      () => import("../components/CommonProductsCont/CommonProductsCont"),
      () => import("../components/brandsCard/BrandsCard"),
    ];

    const loadComponentsSequentially = async () => {
      for (const component of componentsToLoad) {
        await loadComponent(component);
      }
    };

    loadComponentsSequentially();
  }, []);

  return <div className="centercont">{loadedComponents}</div>;
};

export default Home;
