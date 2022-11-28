import { Box } from 'components/Box';
import { PropTypes } from 'prop-types';
import { Title, Label, Percentage } from './Statistics.styled';
import { getRandomColor } from 'utils';
import { theme } from 'utils';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      bg={theme.colors.bgLight}
      boxShadow="primary"
      borderRadius={theme.radii.md}
      width= "1"
    >
      <Box as="section">
        {title && <Title> {title} </Title>}

        <Box as="ul" display="flex" justifyContent="center" flexWrap="wrap">
          {stats.map(({ id, label, percentage }) => {
            const randomColor = getRandomColor();
            return (
              <Box
                as="li"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                color="primary"
                bg={randomColor}
                key={id}
              >
                <Label> {label} </Label>
                <Percentage> {percentage} % </Percentage>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
