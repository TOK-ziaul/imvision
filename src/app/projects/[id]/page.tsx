"use client";

import React, { use } from "react";
import { useQuery } from "@tanstack/react-query";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { DynamicProductSection } from "@/components/DynamicProductSection";
import { Navigation } from "@/components/Navigation";
import { ProjectDetailHero } from "@/components/ProjectDetailHero";
import { Footer } from "@/components/Footer";
import { handleImage, withoutAuthAxios } from "@/lib/config";
import { useTranslation } from "@/hooks/useTranslation";

const fetchProductDetail = async (id: string) => {
  const res = await withoutAuthAxios().get(`/project/${id}`);
  return res.data.data;
};

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // ✅ unwrap params
      const { t,language } = useTranslation();
  

  

  const { data: productData, isLoading } = useQuery({
    queryKey: ["product-detail", id],
    queryFn: () => fetchProductDetail(id),
  });
 
  if (isLoading) {
    return <div>Loading...</div>;
  } 

  console.log("productData", productData);

  return (
    <div className="w-full relative">
      {productData && (
        <>
          <AnimatedBackground />
          <Navigation />

          <ProjectDetailHero
            backgroundImage={handleImage( productData?.hero?.image)}
            category={productData?.hero?.category[language]}
             title={productData?.hero?.industry[language]}
             subtitle={productData?.hero?.description[language]}
          />

          <DynamicProductSection productData={productData} />

          <Footer />
        </>
      )}
    </div>
  );
}
