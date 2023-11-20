function calcHiddenPremiumClass(isPremium: boolean, className: string): string {
  const classHiddenPremium = !isPremium ? ' visually-hidden' : '';
  return (`${className}${classHiddenPremium}`);
}

function calcRaitingPersent(rating:number): string {
  return (`${Math.round(+rating * 100 / 5)}%`);
}

export { calcHiddenPremiumClass, calcRaitingPersent };
