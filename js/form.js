const form = () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const additional = document.querySelectorAll(
      ".group-checkbox-btn__item:checked"
    );
    const additionalValues = Array.from(additional).map((cb) => cb.value);
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      weight: formData.get("weight"),
      age: formData.get("age"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      additionals: additionalValues,
      device: formData.get("deviceChoice"),
      comment: formData.get("comment"),
    };

    const formList = JSON.stringify(data);
    console.log(formList);
  });
};

form();
