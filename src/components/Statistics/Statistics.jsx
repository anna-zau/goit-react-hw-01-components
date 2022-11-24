export const Statistics = data => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">{dataMap}</ul>
    </section>
  );
};

function dataMap(data) {
  const newMarkUp = data
    .map(el => {
      return (
        <li className="item">
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}%</span>
        </li>
      );
    })
    .join('');

  console.log(newMarkUp);

  return newMarkUp;
}
