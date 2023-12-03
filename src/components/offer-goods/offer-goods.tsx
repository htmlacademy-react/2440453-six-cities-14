type TGoodsProps = {
  goodsList: string[];
}

function OfferGoods({goodsList}: TGoodsProps) : JSX.Element {
  const goods = goodsList.map((good) =>
    <li className="offer__inside-item" key={good}>{good}</li>);
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods}
      </ul>
    </div>
  );
}

export default OfferGoods;
