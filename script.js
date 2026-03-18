function roundToNearestTwoPointFive(number) {
  return Math.round(number / 2.5) * 2.5;
}

const form = document.getElementById("rm-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const reps = parseInt(document.getElementById("reps").value);
  const tableBody = document.getElementById("percentage-body");
  tableBody.innerHTML = "";

  const oneRM = weight * (1 + reps / 30);
  const oneRepMaxOutput = document.getElementById("one-rep-max");

  oneRepMaxOutput.textContent = oneRM.toFixed(1);

  console.log(oneRM);

  const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60];

  percentages.forEach(function (percent) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    const weightAtPercent = oneRM * (percent / 100);

    td1.textContent = percent + "%";
    td2.textContent =
      roundToNearestTwoPointFive(weightAtPercent).toFixed(1) + " kg";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tableBody.appendChild(tr);
  });

  const repTableBody = document.getElementById("repmax-body");
  repTableBody.innerHTML = "";

  for (let r = 1; r <= 10; r++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    const weightAtReps = oneRM / (1 + r / 30);

    td1.textContent = r + " Reps";
    td2.textContent =
      roundToNearestTwoPointFive(weightAtReps).toFixed(1) + " kg";

    tr.appendChild(td1);
    tr.appendChild(td2);
    repTableBody.appendChild(tr);
  }
});
