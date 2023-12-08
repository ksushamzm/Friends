const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name_surname = document.querySelector('[name="name_surname"]');
  const genderM = document.querySelector('[name="genderM"]');
  const genderW = document.querySelector('[name="genderW"]');
  const date = document.querySelector('[name="date"]');
  const time = document.querySelector('[name="time"]');
  const age = document.querySelector('[name="age"]');
  const color = document.querySelector('[name="color"]');
  const url1 = document.querySelector('[name="url1"]');
  const url2 = document.querySelector('[name="url2"]');
  const url3 = document.querySelector('[name="url3"]');
  const email = document.querySelector('[name="email"]');
  const tel = document.querySelector('[name="tel"]');
  const like = document.querySelector('[name="like"]');

  const student = {
    "name": name_surname.value,
    "genderM": genderM.checked ? "Мужчина" : "",
    "genderW": genderW.checked ? "Женщина" : "",
    "date": date.value,
    "time": time.value,
    "age": age.value,
    "color": color.value,
    "url1": url1.value,
    "url2": url2.value,
    "url3": url3.value,
    "email": email.value,
    "tel": tel.value,
    "like": like.value
  };

  let json = JSON.stringify(student);

  console.log(json);

  const finalElement = document.getElementById("final");

  function finalOutput (obj) {
    let outputString = "<p>";
    for (const value of Object.entries(obj)) {
      outputString += value[1] + "<p>";
    }
    outputString += "<p>";
    return outputString;
  }

  finalElement.innerHTML = finalOutput(student);
});