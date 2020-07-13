import React from 'react';

import Shimmer from '../../../../../components/Shimmer';

import { Table, TableItem } from '../styles';

const items = [1, 2, 3];

const Skeleton: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Já possui layout?</th>
          <th>Nº de Páginas</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableItem key={item}>
            <td>
              <Shimmer width={90} height={15} />
            </td>
            <td>
              <Shimmer width={130} height={15} />
            </td>
            <td>
              <Shimmer width={50} height={15} />
            </td>
            <td>
              <Shimmer width={50} height={15} />
            </td>
            <td>
              <Shimmer width={90} height={15} />
            </td>
          </TableItem>
        ))}
      </tbody>
    </Table>
  );
};

export default Skeleton;
