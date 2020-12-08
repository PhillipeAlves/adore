import { TableBody } from './TableBody';

export const ProductsTable = () => {
  return (
    <table className='products-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Sku</th>
        </tr>
      </thead>
      <TableBody />
    </table>
  );
};
