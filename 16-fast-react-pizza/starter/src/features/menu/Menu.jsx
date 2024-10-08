import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../service/apiRestaurant';
import MenuItem from './MenuItem';
function Menu() {
  const menu = useLoaderData(); // React-router access to use action data responses;
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// creating a loader to fetch data on rendering of this url
export async function loader() {
  const menu = await getMenu(); //fetch or post function from a service
  return menu;
}

export default Menu;
