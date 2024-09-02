console.log("beginning of index.js used for debug test");

// a breakpoint on the line below will show obj as a local variable which is undefined
const obj = {a: 0,b: 1,c: 2}

// without the debugger line below, a breakpoint here would go to the next line of code, the for loop
debugger;

for (let i=1; i<5; i++) {
  obj.a = (obj.a * i) + i;
  obj.b = (obj.b * i) + i;
  obj.c = (obj.c * i) + i;

  debugger;
}

console.log({obj});
console.log("end of index.js")