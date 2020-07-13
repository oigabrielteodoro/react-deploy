import styled from 'styled-components';
import { shade } from 'polished';

export const CardGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const Calendar = styled.div`
  width: 380px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  button {
    background: transparent;
    border: 0;
    margin-left: auto;
  }

  .DayPicker {
    position: absolute;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 10px;

    top: 50px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${({ theme }) => theme.colors.backgroundSecundary};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.text};
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${({ theme }) => shade(0.2, theme.colors.backgroundSecundary)};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #1c1c2e !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #7051dc !important;
    border-radius: 10px;
    color: #f4ede8 !important;
  }
`;
