type Product = {
  id_product_sku: number;
  id_product: number;
  price: number;
  name: string;
  previous_price: number;
  installments_quantity: number;
  installment_value: number;
  rating: number | null;
  favorite_product: boolean;
  have_stock: boolean;
  image_url: string;
  flags: FlagProduct[];
};

type FlagProduct = {
  id_flag_product: number;
  text_content: string;
  content_image_url: string;
  flag_type: string;
};

type Banner = {
  id_banner_showcase: number;
  content_image_url: string;
  banner_position: number;
  link_url: string | null;
};

type Showcase = {
  id_showcase: number;
  title: string;
  promotion_end_date: string | null;
  page_position: number;
  showcase_type: number;
  showcase_style: number;
  products: Product[];
  banners: Banner[];
};

export type HomeProps = {
  showcase: Showcase[];
};
