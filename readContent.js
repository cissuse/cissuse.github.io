import { readdirSync, statSync, readFileSync, writeFileSync, read } from "fs";
import { join, extname } from "path";
import matter from "gray-matter";

/**
 * 递归获取目录下所有 MDX 文件
 * @param {string} dirPath 要遍历的目录路径
 * @param {string[]} arrayOfFiles 用于递归的文件数组（可选）
 * @returns {string[]} 所有 MDX 文件的路径数组
 */
function getAllMdxFiles(dirPath, arrayOfFiles = []) {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = join(dirPath, file);
    if (statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMdxFiles(fullPath, arrayOfFiles);
    } else if (extname(file) === ".mdx") {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

/**
 * 解析 MDX 文件内容
 * @param {string} filePath MDX 文件路径
 * @returns {object} 包含文件路径、内容和 frontmatter 数据的对象
 */
function parseMdxFile(filePath) {
  const fileContent = readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  const route = filePath.replace(/\\/g, "/").replace(/\.mdx$/, "").replace(/^src\/pages\//, '');
  return {
    route,
    content,
    data,
  };
}

/**
 * 获取并解析目录下所有 MDX 文件
 * @param {string} directory 要处理的目录路径
 * @returns {object[]} 包含所有解析后 MDX 文件的数组
 */
function processAllMdxFiles(directory) {
  const mdxFiles = getAllMdxFiles(directory);
  return mdxFiles.map(parseMdxFile);
}
/**
 * 将js对象写入到指定文件
 * @param {object} data
 * @param {string} outputPath
 */
function writeToJsonFile(data, outputPath) {
  try {
    writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`数据已成功写入 ${outputPath}`);
  } catch (error) {
    console.error("写入文件时出错:", error);
  }
}

/**
 * 从 JSON 文件读取数据
 * @param {string} filePath
 * @returns
 */
function readFromJsonFile(filePath) {
  try {
    const data = readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("读取文件时出错:", error);
    return null;
  }
}

// 使用示例
const directoryPath = "./src/pages/notes"; // 替换为你的目录路径
const outputFilePath = "./mdx_files.json"; // 输出文件路径
try {
  const allMdxFiles = processAllMdxFiles(directoryPath);
  writeToJsonFile(allMdxFiles, outputFilePath);
  const readData = readFromJsonFile(outputFilePath);
  if (readData) {
    console.log(`成功读取 ${readData.length} 个 MDX 文件信息`);
    // 打印第一个文件的信息作为示例
    console.log(readData);
  }
} catch (error) {
  console.error("处理 MDX 文件时出错:", error);
}
