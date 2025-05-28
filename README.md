# Merge Sorted Arrays (TypeScript)

โปรเจกต์ตัวอย่างสำหรับฟังก์ชัน `merge` ที่รับ array 3 ตัวและรวมเป็น array เดียวที่เรียงลำดับจากน้อยไปมาก

---

## Features

- ฟังก์ชัน merge โดยไม่ใช้ `sort()`
- รับ array 3 ตัว
  - `collection_1` และ `collection_3` เรียงจากน้อยไปมาก (ascending)
  - `collection_2` เรียงจากมากไปน้อย (descending)
- รวมทั้งหมดและคืนค่าผลลัพธ์เรียงจากน้อยไปมาก
- มี unit test ด้วย Jest

---

## การติดตั้ง

1. **ดาวน์โหลดหรือโคลนโปรเจกต์นี้**


```bash
npm install

npm test
```

## โครงสร้างโปรเจกต์
```bash
merge-sort-ts/
├── src/
│   └── merge.ts            # ฟังก์ชัน merge
├── tests/
│   └── merge.test.ts       # unit test
├── package.json
├── tsconfig.json
├── jest.config.js
└── .gitignore
```
