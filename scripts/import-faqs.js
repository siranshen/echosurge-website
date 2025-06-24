"use strict";
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const slugify = require("slugify");

if (process.argv.length < 3) {
  console.error("Usage: node scripts/import-faqs.js <en-excel-file> <zh-excel-file>");
  process.exit(1);
}

const enExcelFile = process.argv[2];
const zhExcelFile = process.argv[3];
const enOutputPath = path.join(__dirname, `../faqs/en.json`);
const zhOutputPath = path.join(__dirname, `../faqs/zh.json`);

function parseExcel(file) {
  const workbook = xlsx.readFile(file);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  return rows.slice(1); // skip header
}

function escapeJsonString(str) {
  if (typeof str !== 'string') return str;
  return str;
//   return str.replace(/\\/g, '\\\\')
//             .replace(/\"/g, '\\"')
//             .replace(/\n/g, '\\n')
//             .replace(/\r/g, '\\r')
//             .replace(/\t/g, '\\t');
}

// 1. Parse English Excel and build ID map
const enRows = parseExcel(enExcelFile);
const idMap = [];
const enCategories = {};
for (const row of enRows) {
  if (row.length < 6) continue;
  const [category, question, answer, title, description, keywordsRaw] = row;
  const id = slugify(question, { lower: true, strict: true });
  idMap.push({ question, id, category });
  const keywords = typeof keywordsRaw === "string" ? keywordsRaw.split(/,|，/).map(k => k.trim()).filter(Boolean) : [];
  if (!enCategories[category]) enCategories[category] = [];
  enCategories[category].push({
    id,
    question: escapeJsonString(question),
    answer: escapeJsonString(answer),
    title: escapeJsonString(title),
    description: escapeJsonString(description),
    keywords: keywords.map(escapeJsonString)
  });
}

// 2. Parse Chinese Excel and use ID map from English
const zhRows = parseExcel(zhExcelFile);
const zhCategories = {};
for (let i = 0; i < zhRows.length; ++i) {
  const row = zhRows[i];
  if (row.length < 6) continue;
  const [category, question, answer, title, description, keywordsRaw] = row;
  // Use the ID from the corresponding English row
  const id = idMap[i].id;
  const keywords = typeof keywordsRaw === "string" ? keywordsRaw.split(/,|，/).map(k => k.trim()).filter(Boolean) : [];
  if (!zhCategories[category]) zhCategories[category] = [];
  zhCategories[category].push({
    id,
    question: escapeJsonString(question),
    answer: escapeJsonString(answer),
    title: escapeJsonString(title),
    description: escapeJsonString(description),
    keywords: keywords.map(escapeJsonString)
  });
}

function toOutput(categories) {
  return Object.entries(categories).map(([category, faqs]) => ({
    category,
    faqs
  }));
}

fs.writeFileSync(enOutputPath, JSON.stringify(toOutput(enCategories), null, 2), "utf-8");
fs.writeFileSync(zhOutputPath, JSON.stringify(toOutput(zhCategories), null, 2), "utf-8");
console.log(`Wrote ${enOutputPath} and ${zhOutputPath}`); 