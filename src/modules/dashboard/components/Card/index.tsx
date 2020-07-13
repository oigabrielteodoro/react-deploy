import React, { ComponentType, AreaHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

import { Container } from './styles';

interface ICardProps extends AreaHTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: ComponentType<IconBaseProps>;
  color?: string;
  isUp?: boolean;
  isDown?: boolean;
  percentage?: string;
  width?: number;
  height?: number;
}

const Card: React.FC<ICardProps> = ({
  title,
  icon: Icon,
  color,
  description,
  percentage,
  isUp,
  isDown,
  children,
  style,
}) => {
  return (
    <Container style={style}>
      {children ? (
        <>{children}</>
      ) : (
        <>
          <header>
            <strong>{title}</strong>
            {Icon && <Icon size={25} color={color} />}
          </header>
          <footer>
            <span>{description}</span>

            {percentage && (
              <div>
                <span>{percentage}</span>

                {isUp && <FiArrowUp size={20} color="#61E294" />}
                {isDown && <FiArrowDown size={20} color="#c53030" />}
              </div>
            )}
          </footer>
        </>
      )}
    </Container>
  );
};

export default Card;
