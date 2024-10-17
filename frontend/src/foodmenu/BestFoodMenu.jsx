import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import beefBurgerImg from '../assets/menu1.png';
import chickenPizzaImg from '../assets/menu2.png';
import freshPastaImg from '../assets/menu3.png';
import hotSushiImg from '../assets/menu4.png';
import drinkImg from '../assets/menu5.png';

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories] = useState([
    { name: "Beef Burger", img: beefBurgerImg },
    { name: "Chicken Pizza", img: chickenPizzaImg },
    { name: "Fresh Pasta", img: freshPastaImg },
    { name: "Hot Sushi", img: hotSushiImg },
    { name: "Drink & Juice", img: drinkImg },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/menu`); // Use environment variable
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setMenuItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.name);
  };

  const filteredMenuItems = menuItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="bg-white py-10">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold mb-6">Our Best Foods Menu</h2>

          <div className="mb-6 flex justify-center flex-wrap">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`mr-4 mb-2 p-6 rounded flex flex-col items-center border-r-2 border-dashed ${selectedCategory === category.name ? 'text-red-400' : ''}`}
              >
                {category.img && <img src={category.img} alt={category.name} className="mb-1 w-16 h-16 rounded-full" />}
                <span className={`transition-colors duration-200 ${selectedCategory === category.name ? 'text-red-400' : 'text-gray-800'} hover:text-red-400`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredMenuItems.length > 0 ? ( 
              filteredMenuItems.map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-start space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">
                        <Link 
                          to={`/menu/${item._id}`} 
                          className="hover:text-red-600"
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <div className="bg-red-200 text-red-600 p-2 rounded border-red-600">
                        <p className="text-lg font-bold">${item.price}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex text-red-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`mr-1 ${i < item.rating ? 'text-red-600' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-1">({item.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600">No items available for this category.</div> 
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuComponent;
