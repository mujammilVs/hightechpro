import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Building, Factory, ArrowRight } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const categories = [
    {
      title: "Residential RO Membranes",
      icon: <Home className="w-12 h-12" />,
      description:
        "High-performance membranes for home and small office water purification systems",
      features: [
        "95-98% contaminant removal",
        "50-150 GPD flow rates",
        "Compact design for under-sink installation",
      ],
      image: "../../src/assets/images/wetransfer_hitech/Residential.jpg",
    },
    {
      title: "Commercial RO Membranes",
      icon: <Building className="w-12 h-12" />,
      description:
        "Medium to large-scale solutions for commercial water treatment applications",
      features: [
        "99% salt rejection",
        "Up to 400 GPD capacity",
        "Extended membrane life",
      ],
      image: "../../src/assets/images/wetransfer_hitech/Commercial.webp",
    },
    {
      title: "Industrial RO Membranes",
      icon: <Factory className="w-12 h-12" />,
      description:
        "Heavy-duty membranes for industrial process water and wastewater treatment",
      features: [
        "High chemical resistance",
        '8" diameter elements',
        "Up to 99.7% rejection rate",
      ],
      image: "../../src/assets/images/wetransfer_hitech/Industrial.jpg",
    },
  ];

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            RO Membrane Solutions
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            Discover our comprehensive range of reverse osmosis membranes for every application
          </motion.p>
        </div>
      </motion.div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="mb-2">{category.icon}</div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors group"
                  >
                    View Products
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;