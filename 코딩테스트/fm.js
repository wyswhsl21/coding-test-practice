function solution(spell, dic) {
  var answer = 0;
  const newSpell = spell.sort().join("");
  const newDic = dic.map((v) => v).map((v) => v.split(""));
  const SortDic = newDic.map((v) => v.sort().join(""));
  console.log(newSpell, newDic, SortDic);
  if (SortDic.includes(newSpell)) {
    console.log(1);
  } else {
    console.log(2);
  }
}

solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]);
