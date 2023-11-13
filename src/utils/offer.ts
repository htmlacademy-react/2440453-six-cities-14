function calcHiddenPremiumClass(isPremium: boolean, className: string): string {
  const classHiddenPremium = !isPremium ? ' visually-hidden' : '';
  return (`${className}${classHiddenPremium}`);
}

function calcRaitingPersent(rating:number): number {
  return (+rating * 100 / 5.0);
}

export { calcHiddenPremiumClass, calcRaitingPersent };
