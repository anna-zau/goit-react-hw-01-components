import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  console.log(stats);
  return (
    <section className={css.statistics}>
      {title ? <h2 class={css.title}>{title}</h2> : null}
      <ul className={css.statList}>
        {stats.map(element => {
          return (
            <li className={css.item} key={element.id}>
              <span className={css.label}>{element.label}</span>
              <span className={css.percentage}>{element.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
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
