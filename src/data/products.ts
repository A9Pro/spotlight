export type Product = {
  id: number;
  name: string;
  price: number;
  category: "rings" | "necklaces" | "earrings" | "bracelets" | "sets";
  metal: "Rose Gold" | "Yellow Gold" | "White Gold" | "Platinum" | "Silver";
  gemstone?: "Diamond" | "Sapphire" | "Emerald" | "Ruby" | "None";
  description: string;
  image: string;
  images: string[]; // Multiple images for gallery
  featured: boolean;
  inStock: boolean;
  size?: string[];
  rating: number;
  reviews: number;
  occasion?: string[];
  style?: string[];
};

export const products: Product[] = [
  // RINGS
  {
    id: 1,
    name: "Eternal Love Diamond Ring",
    price: 1250000,
    category: "rings",
    metal: "Rose Gold",
    gemstone: "Diamond",
    description: "Stunning solitaire diamond ring crafted in rose gold. Perfect for engagements and special moments. Features a 1.5ct brilliant-cut diamond.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
    ],
    featured: true,
    inStock: true,
    size: ["5", "6", "7", "8", "9"],
    rating: 4.9,
    reviews: 127,
    occasion: ["Engagement", "Anniversary"],
    style: ["Classic", "Modern"]
  },
  {
    id: 2,
    name: "Vintage Sapphire Band",
    price: 850000,
    category: "rings",
    metal: "White Gold",
    gemstone: "Sapphire",
    description: "Elegant vintage-inspired band featuring deep blue sapphires and delicate diamond accents. Timeless elegance meets modern craftsmanship.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1600721391776-b5cd0e0048a9?w=800"
    ],
    featured: true,
    inStock: true,
    size: ["5", "6", "7", "8"],
    rating: 4.8,
    reviews: 89,
    occasion: ["Anniversary", "Gift"],
    style: ["Vintage", "Classic"]
  },
  {
    id: 3,
    name: "Minimalist Gold Band",
    price: 450000,
    category: "rings",
    metal: "Yellow Gold",
    gemstone: "None",
    description: "Simple yet sophisticated 18K yellow gold band. Perfect for everyday wear or as a wedding band. Smooth polished finish.",
    image: "https://images.unsplash.com/photo-1617038260825-8c8582d5c96e?w=800",
    images: [
      "https://images.unsplash.com/photo-1617038260825-8c8582d5c96e?w=800"
    ],
    featured: false,
    inStock: true,
    size: ["5", "6", "7", "8", "9", "10"],
    rating: 4.7,
    reviews: 203,
    occasion: ["Self-Love", "Gift"],
    style: ["Minimalist", "Modern"]
  },

  // NECKLACES
  {
    id: 4,
    name: "Diamond Pendant Necklace",
    price: 1800000,
    category: "necklaces",
    metal: "Platinum",
    gemstone: "Diamond",
    description: "Exquisite platinum necklace featuring a stunning teardrop diamond pendant. Adjustable chain length 16-18 inches.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"
    ],
    featured: true,
    inStock: true,
    rating: 5.0,
    reviews: 156,
    occasion: ["Engagement", "Anniversary", "Gift"],
    style: ["Classic", "Modern"]
  },
  {
    id: 5,
    name: "Emerald Drop Necklace",
    price: 1350000,
    category: "necklaces",
    metal: "Yellow Gold",
    gemstone: "Emerald",
    description: "Luxurious emerald necklace set in 18K yellow gold. Features a 2ct Colombian emerald surrounded by diamond halo.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
    ],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 92,
    occasion: ["Anniversary", "Self-Love"],
    style: ["Classic", "Vintage"]
  },
  {
    id: 6,
    name: "Layered Chain Necklace",
    price: 580000,
    category: "necklaces",
    metal: "Rose Gold",
    gemstone: "None",
    description: "Modern layered necklace design in rose gold. Three delicate chains create a contemporary, effortless look.",
    image: "https://images.unsplash.com/photo-1610386721879-7e68ed0b0c5c?w=800",
    images: [
      "https://images.unsplash.com/photo-1610386721879-7e68ed0b0c5c?w=800"
    ],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 134,
    occasion: ["Self-Love", "Gift"],
    style: ["Modern", "Minimalist"]
  },

  // EARRINGS
  {
    id: 7,
    name: "Diamond Stud Earrings",
    price: 950000,
    category: "earrings",
    metal: "White Gold",
    gemstone: "Diamond",
    description: "Classic diamond stud earrings in 14K white gold. Each earring features a 0.5ct round brilliant diamond.",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800",
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800"
    ],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 278,
    occasion: ["Self-Love", "Gift", "Anniversary"],
    style: ["Classic", "Minimalist"]
  },
  {
    id: 8,
    name: "Ruby Drop Earrings",
    price: 1100000,
    category: "earrings",
    metal: "Yellow Gold",
    gemstone: "Ruby",
    description: "Elegant ruby drop earrings with diamond accents. Perfect for special occasions. Features natural Burmese rubies.",
    image: "https://images.unsplash.com/photo-1617038260825-8c8582d5c96e?w=800",
    images: [
      "https://images.unsplash.com/photo-1617038260825-8c8582d5c96e?w=800"
    ],
    featured: false,
    inStock: true,
    rating: 4.8,
    reviews: 156,
    occasion: ["Anniversary", "Gift"],
    style: ["Classic", "Vintage"]
  },
  {
    id: 9,
    name: "Hoop Earrings",
    price: 380000,
    category: "earrings",
    metal: "Rose Gold",
    gemstone: "None",
    description: "Sleek rose gold hoop earrings. Lightweight and comfortable for all-day wear. Diameter: 30mm.",
    image: "https://images.unsplash.com/photo-1596944946151-20cee7e210de?w=800",
    images: [
      "https://images.unsplash.com/photo-1596944946151-20cee7e210de?w=800"
    ],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 412,
    occasion: ["Self-Love"],
    style: ["Modern", "Minimalist"]
  },

  // BRACELETS
  {
    id: 10,
    name: "Tennis Bracelet",
    price: 2200000,
    category: "bracelets",
    metal: "Platinum",
    gemstone: "Diamond",
    description: "Luxurious platinum tennis bracelet with 5ct total diamond weight. 70 brilliant-cut diamonds in a secure setting.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
    ],
    featured: true,
    inStock: true,
    rating: 5.0,
    reviews: 98,
    occasion: ["Anniversary", "Engagement"],
    style: ["Classic", "Modern"]
  },
  {
    id: 11,
    name: "Charm Bracelet",
    price: 680000,
    category: "bracelets",
    metal: "Yellow Gold",
    gemstone: "None",
    description: "Customizable charm bracelet in 18K yellow gold. Comes with 3 charms, add more to tell your story.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
    ],
    featured: false,
    inStock: true,
    rating: 4.8,
    reviews: 167,
    occasion: ["Self-Love", "Gift"],
    style: ["Modern", "Minimalist"]
  },

  // SETS
  {
    id: 12,
    name: "Bridal Set - Ring & Necklace",
    price: 3500000,
    category: "sets",
    metal: "Platinum",
    gemstone: "Diamond",
    description: "Complete bridal set featuring a 2ct diamond engagement ring and matching pendant necklace. Perfect harmony of design and craftsmanship.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    images: [
      "https://images.unsplash.com/photo-605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"
    ],
    featured: true,
    inStock: true,
    rating: 5.0,
    reviews: 45,
    occasion: ["Engagement"],
    style: ["Classic", "Modern"]
  }
];

// Helper functions
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: Product["category"]) => 
  products.filter(p => p.category === category);
export const getProductById = (id: number) => 
  products.find(p => p.id === id);
export const getRelatedProducts = (productId: number, limit: number = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};