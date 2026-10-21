import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS, Product, COMPANY_INFO } from "@/data/companyData";
import ProductDetailView from "@/components/ProductDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | VERSATECH EPC",
      description: "The requested industrial product could not be found.",
    };
  }

  return {
    title: `${product.name} - ${product.category} | ${COMPANY_INFO.name}`,
    description: `${product.shortDesc} ASME & IS standard industrial material handling equipment manufactured by VERSATECH EPC Nagpur.`,
    keywords: [
      product.name,
      product.category,
      "VERSATECH EPC",
      "Industrial Material Handling",
      "Ash Handling Systems",
      "Coal Handling",
      "Nagpur Industrial Equipment",
      ...product.applications
    ],
    openGraph: {
      title: `${product.name} | ${COMPANY_INFO.name}`,
      description: product.shortDesc,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Find suggested devices:
  // 1. Same category first
  const sameCategoryProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );

  // 2. Complementary products from other categories if needed
  const complementaryProducts = PRODUCTS.filter(
    (p) => p.categoryId !== product.categoryId && p.id !== product.id
  );

  const suggestedProducts = [
    ...sameCategoryProducts,
    ...complementaryProducts
  ].slice(0, 4);

  return (
    <ProductDetailView
      product={product}
      suggestedProducts={suggestedProducts}
    />
  );
}
