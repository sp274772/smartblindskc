export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  features: string[];
  images: string[];
  specifications: { label: string; value: string }[];
  category: 'blinds' | 'curtains';
  catalogPdf?: string;
}

export const products: Product[] = [
  {
    id: "zebra-blinds",
    name: "Zebra Blinds",
    category: 'blinds',
    catalogPdf: "/Zebra Blinds Fabric Catalogue.pdf",
    description: "Dual-layered sheer and solid fabric bands for precise light control.",
    longDescription: "Zebra blinds, also known as dual blinds or vision blinds, are a modern and stylish window treatment that combines the functionality of both a roller shade and a horizontal blind. They feature alternating bands of sheer and solid fabric that can be aligned to provide either a clear view of the outside or complete privacy and light blockage.",
    price: "Contact for Pricing",
    features: [
      "Material: 100% High-Quality Polyester",
      "Light Control: Sheer to Blackout options",
      "Operation: Manual or State-of-the-art Motorized",
      "Easy to Clean: Dust-resistant and wipeable fabric",
      "Custom Fit: Made to your exact window measurements",
      "UV Protection: Blocks up to 99% of harmful UV rays"
    ],
    images: [
      "/zebra blinds.png",
      "/z2.avif",
      "/z3.avif",
      "/z4.avif",
      "/z5.avif",
      "/z6.avif",
      "/z7.avif",
      "/z8.avif",
      "/z9.avif"
    ],
    specifications: [
      { label: "Material", value: "100% Polyester" },
      { label: "Max Width", value: "280cm / 230cm(DE)" },
      { label: "Thickness", value: "0.63mm ±5%" },
      { label: "Weight", value: "380g/430g/m² ±5%" },
      { label: "Blackout Rate", value: "Full Blackout" },
      { label: "Warranty", value: "3-5 Years" }
    ]
  },
  {
    id: "roller-shades",
    name: "Roller Shades",
    category: 'blinds',
    catalogPdf: "/Roller Blinds Fabric Catalogue.pdf",
    description: "Sleek, modern, and easy to operate. Available in various opacities.",
    longDescription: "Roller shades are the ultimate in simplicity and functionality. These shades roll up into a compact headrail, providing a clean and unobstructed view when open. Available in a vast array of fabrics, from sheer sunscreens to total blackout materials.",
    price: "Contact for Pricing",
    features: [
      "Clean, minimalist design",
      "Durable and easy to maintain",
      "Wide range of colors and textures",
      "Available with cordless or motorized operation",
      "Excellent for both residential and commercial spaces"
    ],
    images: [
      "/roller-blinds.webp",
      "/r1.avif",
      "/r2.avif",
      "/r3.avif",
      "/r4.avif",
      "/r5.avif",
      "/r6.avif",
      "/r7.avif"
    ],
    specifications: [
      { label: "Material", value: "Polyester / PVC Blend" },
      { label: "Operation", value: "Manual / Motorized" },
      { label: "Max Height", value: "350cm" },
      { label: "Fire Rating", value: "Available upon request" },
      { label: "Warranty", value: "3 Years" }
    ]
  },
  {
    id: "cellular-shades",
    name: "Cellular Shades",
    category: 'blinds',
    catalogPdf: "/cellular blinds Honeycomb Fabric Catalog.pdf",
    description: "Honeycomb structure traps air for superior energy efficiency.",
    longDescription: "Cellular shades, or honeycomb shades, are designed with unique air-trapping pockets that provide exceptional insulation. They help keep your home cool in the summer and warm in the winter, significantly reducing energy costs while providing a soft, diffused light.",
    price: "Contact for Pricing",
    features: [
      "Superior thermal insulation",
      "Excellent sound absorption",
      "Compact stack when fully raised",
      "Top-down/bottom-up options available",
      "Available in sheer, light-filtering, and blackout"
    ],
    images: [
      "/cellular-blinds.webp",
      "/c1.avif",
      "/c2.avif",
      "/c3.avif",
      "/c4.jpg",
      "/c5.avif",
      "/c6.jpg",
      "/c7.avif",
      "/c8.avif",
      "/c9.avif"
    ],
    specifications: [
      { label: "Cell Size", value: "25mm / 38mm" },
      { label: "Material", value: "Non-woven Polyester" },
      { label: "R-Value", value: "Up to 4.5" },
      { label: "UV Blockage", value: "99%" },
      { label: "Warranty", value: "5 Years" }
    ]
  },
  {
    id: "roman-shades",
    name: "Roman Shades",
    category: 'blinds',
    catalogPdf: "/Roman Blinds Fabric Catalogue.pdf",
    description: "Elegant fabric folds that add a touch of luxury to any room.",
    longDescription: "Roman shades combine the soft look of drapery with the functional convenience of a shade. When raised, the fabric stacks into beautiful, even folds. When lowered, they provide a smooth, clean appearance that showcases the beauty of the chosen fabric.",
    price: "Contact for Pricing",
    features: [
      "Timeless, sophisticated look",
      "Available in flat or hobbled styles",
      "Wide selection of premium fabrics",
      "Can be lined for extra privacy or light control",
      "Hand-crafted quality"
    ],
    images: [
      "/Roman blinds.png",
      "/rm1.avif",
      "/rm2.avif",
      "/rm3.avif",
      "/rm4.avif",
      "/rm5.avif",
      "/rm6.avif",
      "/rm7.avif",
      "/rm8.jpg"
    ],
    specifications: [
      { label: "Style", value: "Flat / Soft Fold" },
      { label: "Lining", value: "Light Filtering / Blackout" },
      { label: "Mount Type", value: "Inside / Outside" },
      { label: "Warranty", value: "3 Years" }
    ]
  },
  {
    id: "faux-wood-blinds",
    name: "Faux Wood Blinds",
    category: 'blinds',
    catalogPdf: "/Fauxwood Blinds Catalog.pdf",
    description: "The look of real wood with incredible durability and moisture resistance.",
    longDescription: "Faux wood blinds offer the classic warmth and beauty of real wood but are made from advanced synthetic materials that won't warp, crack, or fade. They are ideal for high-moisture areas like kitchens and bathrooms, providing long-lasting style and easy maintenance.",
    price: "Contact for Pricing",
    features: [
      "Moisture and heat resistant",
      "Easy to clean with soap and water",
      "Authentic wood grain textures",
      "Heavy-duty components for longevity",
      "Cost-effective alternative to real wood"
    ],
    images: [
      "/faux wood  Blinds.png",
      "/fw1.avif",
      "/fw2.avif",
      "/fw3.avif",
      "/fw4.avif"
    ],
    specifications: [
      { label: "Slat Size", value: "50mm / 63mm" },
      { label: "Material", value: "PVC / Composite" },
      { label: "UV Rating", value: "UV Inhibitors included" },
      { label: "Warranty", value: "Lifetime Limited" }
    ]
  },
  {
    id: "vertical-blinds",
    name: "Vertical Blinds",
    category: 'blinds',
    catalogPdf: "/Vertical Dream Blinds  Fabric Catalogue.pdf",
    description: "Perfect for sliding glass doors and large windows.",
    longDescription: "Vertical blinds are a practical and stylish solution for large windows and sliding doors. The vertical slats can be rotated to control light and privacy or drawn completely to the side for an unobstructed view. Available in a variety of materials including PVC, fabric, and faux wood.",
    price: "Contact for Pricing",
    features: [
      "Ideal for wide window spans",
      "Easy to operate and maintain",
      "Excellent light control",
      "Durable and long-lasting",
      "Available in many colors and textures"
    ],
    images: [
      "/vertical-blinds.jpg",
      "/vt1.avif",
      "/vt2.avif",
      "/vt3.avif",
      "/vt4.avif",
      "/vt5.avif",
      "/vt6.avif",
      "/vt7.avif",
      "/vt8.avif"
    ],
    specifications: [
      { label: "Slat Width", value: "89mm / 127mm" },
      { label: "Material", value: "PVC / Fabric" },
      { label: "Track System", value: "Aluminum" },
      { label: "Warranty", value: "3 Years" }
    ]
  },
  {
    id: "shangrila-blinds",
    name: "Shangrila Blinds",
    category: 'blinds',
    catalogPdf: "/Shangri-la Blinds Fabric Color-2025.pdf",
    description: "Elegant sheer shades with soft fabric vanes suspended between two sheer panels.",
    longDescription: "Shangrila blinds, also known as sheer horizontal shades, offer the ultimate in elegance and light control. Soft fabric vanes are suspended between two layers of sheer fabric, allowing you to tilt the vanes to control light while maintaining a soft, diffused view of the outside.",
    price: "Contact for Pricing",
    features: [
      "Combines the look of sheers and blinds",
      "Soft, diffused natural light",
      "Vanes can be tilted for privacy",
      "Elegant and luxurious appearance",
      "UV protection for your interior"
    ],
    images: [
      "/shangrila blinds.png",
      "/s1.avif",
      "/s2.avif",
      "/s3.avif",
      "/s4.avif",
      "/s5.avif",
      "/s6.avif",
      "/s7.avif",
      "/s8.avif"
    ],
    specifications: [
      { label: "Vane Size", value: "50mm / 75mm" },
      { label: "Material", value: "100% Polyester" },
      { label: "Operation", value: "Manual / Motorized" },
      { label: "Warranty", value: "3 Years" }
    ]
  },
  {
    id: "skylight-shades",
    name: "Skylight Shades",
    category: 'blinds',
    catalogPdf: "/cellular blinds Honeycomb Fabric Catalog.pdf",
    description: "Specially designed shades to control light and temperature from your roof windows.",
    longDescription: "Skylight shades are essential for controlling heat and glare from overhead windows. Our custom-fitted skylight solutions are designed to operate smoothly at any angle, helping to maintain a comfortable temperature in your home year-round.",
    price: "Contact for Pricing",
    features: [
      "Reduces heat gain and glare",
      "Custom-fitted for any skylight size",
      "Available in honeycomb or roller styles",
      "Manual or motorized operation (solar options available)",
      "Protects furniture from UV damage"
    ],
    images: [
      "/skylight shades.png",
      "/sk1.jpg",
      "/sk2.avif",
      "/sk3.jpg",
      "/sk4.jpg",
      "/sk5.avif",
      "/sk6.avif"
    ],
    specifications: [
      { label: "Style", value: "Cellular / Roller" },
      { label: "Operation", value: "Wand / Motorized / Remote" },
      { label: "Mount", value: "Side Channel System" },
      { label: "Warranty", value: "3 Years" }
    ]
  },
  {
    id: "outdoor-zip-blinds",
    name: "Outdoor Zip Blinds",
    category: 'blinds',
    catalogPdf: "/Outdoor Roller Blinds Fabric compressed.pdf",
    description: "Durable exterior shades that protect your patio from sun, wind, and insects.",
    longDescription: "Outdoor zip blinds are the perfect way to extend your living space. These heavy-duty exterior shades feature a side-channel 'zip' system that keeps the fabric taut and secure, providing protection from the sun, wind, rain, and insects while maintaining your view.",
    price: "Contact for Pricing",
    features: [
      "Heavy-duty weather resistance",
      "Zip-track system for wind stability",
      "Protects against insects and UV rays",
      "Motorized for easy operation",
      "Enhances outdoor living comfort"
    ],
    images: [
      "/outdoor-zip-blinds.webp",
      "/o1.avif",
      "/o2.avif",
      "/o4.avif",
      "/o5.avif",
      "/o6.jpg",
      "/o7.avif",
      "/o8.avif",
      "/o9.avif",
      "/o10.avif"
    ],
    specifications: [
      { label: "Fabric", value: "External Grade Mesh / Canvas" },
      { label: "Hardware", value: "Powder-coated Aluminum" },
      { label: "Wind Rating", value: "Up to 60km/h" },
      { label: "Warranty", value: "5 Years" }
    ]
  },
  {
    id: "venetian-blinds",
    name: "Venetian Blinds",
    category: 'blinds',
    catalogPdf: "/Aluminum Blinds Catalog_compressed.pdf",
    description: "Classic horizontal slats offering timeless style and versatile light control.",
    longDescription: "Venetian blinds are a classic choice for any home. The horizontal slats can be tilted to precisely control the amount of light and privacy in a room. Available in aluminum, real wood, and faux wood to suit any decor style.",
    price: "Contact for Pricing",
    features: [
      "Versatile light and privacy control",
      "Timeless and classic design",
      "Available in various slat widths",
      "Durable and easy to operate",
      "Wide range of colors and finishes"
    ],
    images: [
      "/Venetian-blinds.jpg",
      "/ve1.avif",
      "/ve2.avif",
      "/ve3.avif",
      "/ve4.avif",
      "/ve5.avif",
      "/ve6.avif",
      "/ve7.avif",
      "/ve8.avif",
      "/ve9.jpg"
    ],
    specifications: [
      { label: "Slat Width", value: "25mm / 50mm" },
      { label: "Material", value: "Aluminum / Wood / PVC" },
      { label: "Control", value: "Cord / Wand / Motorized" },
      { label: "Warranty", value: "3 Years" }
    ]
  },
  {
    id: "odd-shaped-shades",
    name: "Odd-shaped Shades",
    category: 'blinds',
    catalogPdf: "/Odd-shaped Honeycomb Shades_catalogue.pdf",
    description: "Custom-fitted shades designed specifically for uniquely shaped windows.",
    longDescription: "Odd-shaped shades are the perfect solution for arched, angled, circular, or otherwise uniquely shaped windows. We custom-measure and manufacture these shades to perfectly fit the exact contours of your specialty windows, providing light control and privacy without sacrificing the architectural beauty of your home.",
    price: "Contact for Pricing",
    features: [
      "Custom fit for arches, angles, and circles",
      "Preserves architectural window details",
      "Available in cellular, roller, and wood styles",
      "Precise light and privacy control",
      "Expert measurement and installation"
    ],
    images: [
      "/oddshape-main.jpg",
      "/oddshape-1.jpg",
      "/oddshape-2.jpg",
      "/oddshape-3.jpg"
    ],
    specifications: [
      { label: "Shape", value: "Arch / Angle / Circle / Custom" },
      { label: "Material", value: "Cellular / Wood / Fabric" },
      { label: "Operation", value: "Fixed / Movable / Motorized" },
      { label: "Warranty", value: "3 Years" }
    ]
  },
  {
    id: "digital-printed-shades",
    name: "Digital Printed Shades",
    category: 'blinds',
    catalogPdf: "/Printed Blinds Catalog.pdf",
    description: "Custom digital prints on high-quality shade fabrics for a truly unique look.",
    longDescription: "Digital printed shades allow you to bring any design, pattern, or even personal photography to your windows. Using advanced high-definition printing technology, we can create stunning, vibrant window treatments that serve as a focal point in any room. Perfect for children's rooms, commercial branding, or adding a personal artistic touch to your living space.",
    price: "Contact for Pricing",
    features: [
      "High-definition digital printing",
      "UV-resistant inks for long-lasting color",
      "Available on various fabric opacities",
      "Custom designs and patterns",
      "Durable and easy to maintain"
    ],
    images: [
      "/p1.jpg",
      "/p2.avif",
      "/p3.jpg",
      "/p4.avif",
      "/p5.avif",
      "/p6.avif",
      "/p7.avif"
    ],
    specifications: [
      { label: "Printing", value: "High-Definition Digital" },
      { label: "Material", value: "Polyester / Screen Fabric" },
      { label: "Operation", value: "Manual / Motorized" },
      { label: "Warranty", value: "3 Years" }
    ]
  },
  {
    id: "sheer-curtains",
    name: "Sheer Curtains",
    category: 'curtains',
    catalogPdf: "/Sheer Curtain Fabric Catalogue_compressed.pdf",
    description: "Softly filter natural light while maintaining daytime privacy.",
    longDescription: "Sheer curtains are the perfect way to add a soft, ethereal touch to your windows. They filter harsh sunlight into a gentle glow while providing daytime privacy. Often used as a base layer under heavier drapes for a beautiful layered look.",
    price: "Contact for Pricing",
    features: [
      "Softly diffuses natural light",
      "Provides daytime privacy",
      "Lightweight and airy feel",
      "Available in various textures and patterns",
      "Easy to layer with other treatments"
    ],
    images: [
      "/sheer-curtains.webp",
      "/s1.png",
      "/s2.png",
      "/s3.png",
      "/s4.png",
      "/s5.png",
      "/s6.avif",
      "/s7.jpg",
      "/s8.jpg"
    ],
    specifications: [
      { label: "Material", value: "Voile / Chiffon / Organza" },
      { label: "Transparency", value: "High to Medium" },
      { label: "Care", value: "Machine Washable (most)" },
      { label: "Warranty", value: "1 Year" }
    ]
  },
  {
    id: "blackout-curtains",
    name: "Blackout Curtains",
    category: 'curtains',
    catalogPdf: "/Blockout Curtain Fabric Catalog_compressed.pdf",
    description: "Block out light completely for optimal sleep and media viewing.",
    longDescription: "Blackout curtains are designed with specialized light-blocking technology to provide total darkness. They are ideal for bedrooms, nurseries, and home theaters. In addition to blocking light, they also provide excellent thermal insulation and noise reduction.",
    price: "Contact for Pricing",
    features: [
      "Blocks 100% of incoming light",
      "Reduces outside noise",
      "Improves energy efficiency",
      "Protects interior from UV fading",
      "Promotes better sleep quality"
    ],
    images: [
      "/blackout-curtain.webp",
      "/b1.jpg",
      "/b2.jpg",
      "/b3.jpg",
      "/b4.jpg",
      "/b5.jpg",
      "/b6.jpg",
      "/b7.avif",
      "/b8.jpg"
    ],
    specifications: [
      { label: "Material", value: "Triple-weave / Coated Fabric" },
      { label: "Light Blockage", value: "99% - 100%" },
      { label: "Thermal Rating", value: "High" },
      { label: "Warranty", value: "2 Years" }
    ]
  },
  {
    id: "valance",
    name: "Valance",
    category: 'curtains',
    catalogPdf: "/valance Catalog.pdf",
    description: "Decorative top treatments with elegant lace details that add a finishing touch to any window.",
    longDescription: "A valance is a decorative top treatment that covers the upper part of the window. It can be used alone for a minimalist look or paired with drapes or blinds to add depth, texture, and a finished appearance to your window treatments.",
    price: "Contact for Pricing",
    features: [
      "Adds decorative flair to any window",
      "Hides hardware and headrails",
      "Available in many styles (swag, box pleat, etc.)",
      "Can be custom-made to match drapes",
      "Perfect for kitchens and bathrooms"
    ],
    images: [
      "/valance.webp",
      "/v1.jpeg",
      "/v2.jpeg",
      "/v3.jpeg",
      "/v4.jpeg",
      "/v5.jpeg",
      "/v6.jpeg"
    ],
    specifications: [
      { label: "Style", value: "Tailored / Ruffled / Scalloped" },
      { label: "Mount", value: "Rod Pocket / Board Mount" },
      { label: "Material", value: "Cotton / Polyester / Silk" },
      { label: "Warranty", value: "1 Year" }
    ]
  }
];
