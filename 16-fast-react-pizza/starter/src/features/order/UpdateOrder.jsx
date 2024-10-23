import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  function handlePriority() {
    order.priority;
  }
  return (
    <fetcher.Form method="PATCH" className=" text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ requst, params }) {
  const data = { priority: true };
  await updateOrder(params.id, data);
  return null;
}
