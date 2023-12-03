import { THost } from '../../types';

type THostProps = {
  host: THost;
  text?: string;
  desc?: string;
}

function OfferHost({host, text, desc}: THostProps) : JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">
          {host.name}
        </span>
        {host.isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="offer__description">
        <p className="offer__text">
          {text}
        </p>
        <p className="offer__text">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default OfferHost;
