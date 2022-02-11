export function formatDate() {
  const d = new Date();
  let s =
    addZero(d.getFullYear(), 4) +
    '-' +
    addZero(d.getMonth() + 1, 2) +
    '-' +
    addZero(d.getDate(), 2) +
    ' ' +
    addZero(d.getHours(), 2) +
    ':' +
    addZero(d.getMinutes(), 2) +
    ':' +
    addZero(d.getSeconds(), 2);

  return s;
}

function addZero(n: number, digits: number) {
  let zero = '';
  const stringN = n.toString();
  if (stringN.length < digits) {
    for (let i = 0; i < digits - stringN.length; i++) zero += '0';
  }

  return zero + n;
}
