import "../../Styles/Styles.scss";

export const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container container-fluid">
      <h2>{greeting}</h2>
    </section>
  );
};