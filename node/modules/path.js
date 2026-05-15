import path from "path";

const filePath = "folder1/folder2/folder3/folder4/readme.txt";

//  filename" path.baseName()
const fileName = path.basename(filepath);

console.log(fileName);

// extension: path.extname()
console.log(path.extname(filePath));

// folders: path.dirname()
console.log(path.dirname(filePath));
