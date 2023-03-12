// Example 1: Partials
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
  // Tell TypeScript the variable with eventually be a CourseGoal
  // Note: The partial is a wrapper that makes all properties optional
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // requires you to convert from Partial to CourseGoal
  return courseGoal as CourseGoal;
}

// Example 2: Readonly tells TypeScript the variable cannot be modified
const names: Readonly <string[]> = ["Tony", "Anna"];
// names.push("Max");
// names.pop();