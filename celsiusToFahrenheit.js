export function celsiusToFahrenheit() {
  const a = Number(prompt("Введите температуру в градусах Цельсия"));
  const f = (a * 9) / 5 + 32;
  alert("Температура в градусах Фаренгейта равна" + f);
}
