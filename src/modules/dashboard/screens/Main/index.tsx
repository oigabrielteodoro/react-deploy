import React, { useRef, useState, useCallback } from 'react';
import { FiHeart, FiUsers, FiClipboard, FiChevronDown } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { format, isBefore, isAfter } from 'date-fns';

import { useTheme } from '../../../../hooks/theme';
import { useClickOutside } from '../../../../utils/getClickOutside';

import Alert from '../../../../components/Alert';

import Header from '../../components/Header';
import Card from '../../components/Card';

import LineChart from './sections/LineChart';

import { CardGroup, Calendar } from './styles';

const Main: React.FC = () => {
  const { theme } = useTheme();
  const calendarRef = useRef<HTMLDivElement>(null);

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const [selectedType, setSelectedType] = useState<'start' | 'end'>('start');

  const [, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDays, setSelectedDays] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);

  const handleDateChange = useCallback(
    (day: Date, modifiers: DayModifiers) => {
      if (modifiers.available && !modifiers.disabled) {
        const [start_at, end_at] = selectedDays;

        if (selectedType === 'end') {
          if (isAfter(end_at, day)) {
            setSelectedDays([day, end_at]);
            setSelectedType('start');
          }
        }

        if (selectedType === 'start') {
          if (isBefore(start_at, day)) {
            setSelectedDays([start_at, day]);
            setSelectedType('end');
          }
        }
      }
    },
    [selectedDays, selectedType, setSelectedDays],
  );

  const handleMonthChange = useCallback(
    (month: Date) => {
      setCurrentMonth(month);
    },
    [setCurrentMonth],
  );

  const handleToggleCalendar = useCallback(() => {
    setIsOpenCalendar(!isOpenCalendar);
  }, [setIsOpenCalendar, isOpenCalendar]);

  useClickOutside(calendarRef, () => handleToggleCalendar(), isOpenCalendar);

  return (
    <>
      <Header title="Estatísticas" />

      <CardGroup style={{ marginBottom: 30 }}>
        <Card
          title="Curtidas"
          icon={FiHeart}
          color={theme.colors.error}
          description="500 curtidas no último mês"
          percentage="+ 100%"
          isUp
        />

        <Card
          title="Visitantes"
          icon={FiUsers}
          color={theme.colors.primary}
          description="100 visitantes no último mês"
          percentage="- 10%"
          isDown
        />

        <Card
          title="Propostas"
          icon={FiClipboard}
          color={theme.colors.warning}
          description="5 propostas no último mês"
          percentage="+ 10%"
          isUp
        />
      </CardGroup>
      <Alert type="info" isVisible>
        Você precisa adquirir o Netlify para ver os acessos da página.
      </Alert>
      <CardGroup>
        <Card>
          <header>
            <h3>Crescimento da página</h3>

            <Calendar ref={calendarRef}>
              <button type="button" onClick={handleToggleCalendar}>
                <span>
                  {format(selectedDays[0], 'dd/MM/yyyy')} -{' '}
                  {format(selectedDays[1], 'dd/MM/yyyy')}
                </span>

                <FiChevronDown size={15} color="#a8a8b3" />
              </button>

              {isOpenCalendar && (
                <DayPicker
                  weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                  fromMonth={new Date()}
                  modifiers={{
                    available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
                  }}
                  selectedDays={selectedDays}
                  onMonthChange={handleMonthChange}
                  onDayClick={handleDateChange}
                  months={[
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro',
                  ]}
                />
              )}
            </Calendar>
          </header>

          <LineChart selectedDays={selectedDays} />
        </Card>
      </CardGroup>
    </>
  );
};

export default Main;
