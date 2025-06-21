import { useState } from 'react';
import './App.css';
import sidebarList, { type SidebarItem } from './siderbar';

function App() {

  const [activeItem, setActiveItem] = useState<string>("dashboard");
  // const navigate = useNavigate();

  const handleClick = (item: SidebarItem) => {
    setActiveItem(item.id);
    // navigate(item.path);
  };
  return (
    <div>
      <ul className="space-y-2">
        {sidebarList.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;

          return (
            <li
              key={item.id}
              onClick={() => handleClick(item)}
              className={`flex items-center p-2 rounded cursor-pointer hover:bg-gray-700`}
            >
              <Icon
                className={`w-6 h-6 mr-3 ${isActive ? 'text-blue-500': 'text-gray-500'}`}
              />
              <span>
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default App
