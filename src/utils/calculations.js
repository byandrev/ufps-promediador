function getDefinitive(ex1, ex2, ex3, final) {
  ex1 = parseFloat(ex1) || 0;
  ex2 = parseFloat(ex2) || 0;
  ex3 = parseFloat(ex3) || 0;
  final = parseFloat(final) || 0;
  const ans = ((ex1 + ex2 + ex3) / 3) * 0.7 + final * 0.3;

  if (Number.isInteger(ans)) return ans;
  else return ans.toFixed(1);
}

export { getDefinitive };
