export function calculateFallDistance() {
  const t = Number(prompt("Введите время падения объекта в секундах"));
  const g = 9.8;
  const d = (1 / 2) * g * (t * t);
  alert("Расстояние, которое пролетел объект, равно" + d + "м");
}
