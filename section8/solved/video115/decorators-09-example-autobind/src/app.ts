function Required() {}

function PositiveNumber(){}

function validate(_obj: object){}

class Course {
  // @Required
  title: string;
  // @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

  //Example1: Create a course instance from input data
  const courseForm = document.querySelector("form")!;

  // Add EventListener
  courseForm.addEventListener("submit", event => {
    event.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
    // if(!validate(createdCourse)){
      alert("Invalid input, please try again.")
      return;
    // }
    console.log(createdCourse);
  })

  // Example2: Validate Form Input Data with eventListener