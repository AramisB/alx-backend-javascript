// modify the variables inside the function taskBlock
// so that the variables aren’t overwritten inside the conditional block.
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
