function umJewelsInStones(J, S) {
  let re = new RegExp(`[${J}]`, "g");
  return S.match(re).length;
};

umJewelsInStones('z', 'ZZ')
