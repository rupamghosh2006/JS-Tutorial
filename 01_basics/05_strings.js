let Name = "Rupam";
let age = 18

//console.log("My name is " + Name + ", my age is " + age);

console.log(`Hello my name is ${Name}, my age is ${age}`);

const gameName = new String('rupam-ghosh-bhagyabantapur')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4,5)
console.log(anotherString);

const newStringOne = "   rupam    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rupam.com/rupam%20ghosh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

let email = "user@example.com";
let result = email.match(/\S+@\S+\.\S+/);
console.log(result);


/*
| Function                     | Description                                                      | Example                                                                             |
| ---------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `anchor()`                   | Creates an HTML anchor (`<a>`) tag.                              | `"Google".anchor("https://google.com")` → `<a name="https://google.com">Google</a>` |
| `at()`                       | Returns character at a given index (supports negative indexing). | `"Hello".at(-1)` → `"o"`                                                            |
| `big()`                      | Wraps text in `<big>` tag.                                       | `"text".big()` → `<big>text</big>`                                                  |
| `blink()`                    | Wraps text in `<blink>` (non-standard, may not work).            | `"text".blink()` → `<blink>text</blink>`                                            |
| `bold()`                     | Wraps text in `<b>`.                                             | `"text".bold()` → `<b>text</b>`                                                     |
| `charAt()`                   | Returns character at specified index.                            | `"hello".charAt(1)` → `"e"`                                                         |
| `charCodeAt()`               | Returns UTF-16 code of char at index.                            | `"A".charCodeAt(0)` → `65`                                                          |
| `codePointAt()`              | Returns full Unicode code point.                                 | `"𠮷".codePointAt(0)` → `134071`                                                    |
| `concat()`                   | Joins strings.                                                   | `"hi".concat(" there")` → `"hi there"`                                              |
| `constructor`                | Refers to the string's constructor (usually `String`).           | `str.constructor === String` → `true`                                               |
| `endsWith()`                 | Checks if string ends with specified value.                      | `"hello.js".endsWith(".js")` → `true`                                               |
| `fixed()`                    | Wraps in `<tt>` (teletype text).                                 | `"text".fixed()` → `<tt>text</tt>`                                                  |
| `fontcolor()`                | Wraps with `<font color="...">`.                                 | `"hello".fontcolor("red")` → `<font color="red">hello</font>`                       |
| `fontsize()`                 | Wraps in `<font size="...">`.                                    | `"hello".fontsize(5)` → `<font size="5">hello</font>`                               |
| `includes()`                 | Checks if substring exists.                                      | `"hello".includes("el")` → `true`                                                   |
| `indexOf()`                  | Returns first index of a value.                                  | `"banana".indexOf("a")` → `1`                                                       |
| `isWellFormed()`             | Checks if string is well-formed Unicode.                         | `"hello".isWellFormed()` → `true`                                                   |
| `italics()`                  | Wraps text in `<i>`.                                             | `"text".italics()` → `<i>text</i>`                                                  |
| `lastIndexOf()`              | Returns last index of a value.                                   | `"banana".lastIndexOf("a")` → `5`                                                   |
| `length`                     | Returns string length.                                           | `"hello".length` → `5`                                                              |
| `link()`                     | Wraps text in an `<a href="...">`.                               | `"Google".link("https://google.com")` → `<a href="https://google.com">Google</a>`   |
| `localeCompare()`            | Compares strings (locale-sensitive).                             | `"a".localeCompare("b")` → `-1`                                                     |
| `match()`                    | Matches string against a regex.                                  | `"abc123".match(/\d+/)` → `["123"]`                                                 |
| `matchAll()`                 | Returns all matches (with regex).                                | `Array.from("test1test2".matchAll(/\d/g))` → `["1", "2"]`                           |
| `normalize()`                | Returns Unicode-normalized string.                               | `"é".normalize("NFD")` → `"é"`                                                     |
| `padEnd()`                   | Pads string at the end.                                          | `"5".padEnd(3, "0")` → `"500"`                                                      |
| `padStart()`                 | Pads string at the beginning.                                    | `"5".padStart(3, "0")` → `"005"`                                                    |
| `repeat()`                   | Repeats the string.                                              | `"ha".repeat(3)` → `"hahaha"`                                                       |
| `replace()`                  | Replaces first match (regex or string).                          | `"abcabc".replace("a", "x")` → `"xbcabc"`                                           |
| `replaceAll()`               | Replaces all matches.                                            | `"abcabc".replaceAll("a", "x")` → `"xbcxbc"`                                        |
| `search()`                   | Searches for a regex and returns the index.                      | `"abc123".search(/\d/)` → `3`                                                       |
| `slice()`                    | Extracts section of string.                                      | `"abcdef".slice(1, 4)` → `"bcd"`                                                    |
| `small()`                    | Wraps in `<small>`.                                              | `"text".small()` → `<small>text</small>`                                            |
| `split()`                    | Splits string by a separator.                                    | `"a,b,c".split(",")` → `["a","b","c"]`                                              |
| `startsWith()`               | Checks if string starts with given value.                        | `"hello".startsWith("he")` → `true`                                                 |
| `strike()`                   | Wraps in `<strike>`.                                             | `"text".strike()` → `<strike>text</strike>`                                         |
| `sub()`                      | Wraps in `<sub>` (subscript).                                    | `"2".sub()` → `<sub>2</sub>`                                                        |
| `substr()`                   | Extracts from start index and length. *(Deprecated)*             | `"abcdef".substr(1, 3)` → `"bcd"`                                                   |
| `substring()`                | Extracts from start to end index.                                | `"abcdef".substring(1, 4)` → `"bcd"`                                                |
| `sup()`                      | Wraps in `<sup>` (superscript).                                  | `"2".sup()` → `<sup>2</sup>`                                                        |
| `toLocaleLowerCase()`        | Locale-aware lowercase.                                          | `"İ".toLocaleLowerCase("tr")` → `"i"`                                               |
| `toLocaleUpperCase()`        | Locale-aware uppercase.                                          | `"i".toLocaleUpperCase("tr")` → `"İ"`                                               |
| `toLowerCase()`              | Converts to lowercase.                                           | `"ABC".toLowerCase()` → `"abc"`                                                     |
| `toString()`                 | Returns string itself.                                           | `"hello".toString()` → `"hello"`                                                    |
| `toUpperCase()`              | Converts to uppercase.                                           | `"abc".toUpperCase()` → `"ABC"`                                                     |
| `toWellFormed()`             | Returns well-formed Unicode version.                             | `"a\uD800".toWellFormed()` → `"a�"`                                                 |
| `trim()`                     | Removes whitespace from both ends.                               | `"  hi  ".trim()` → `"hi"`                                                          |
| `trimEnd()` / `trimRight()`  | Removes whitespace from end.                                     | `"hi  ".trimEnd()` → `"hi"`                                                         |
| `trimStart()` / `trimLeft()` | Removes whitespace from start.                                   | `"  hi".trimStart()` → `"hi"`                                                       |
| `valueOf()`                  | Returns primitive value.                                         | `"text".valueOf()` → `"text"`                                                       |
| `[Symbol.iterator]()`        | Enables iteration in `for...of`.                                 | `for (let c of "hi") console.log(c)` → `h` `i`                                      |

*/