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
          <th>Github</th>
          <th>Demonstração</th>
          <th>Curtidas</th>
          <th>Ações</th>
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
              <Shimmer width={130} height={15} />
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
