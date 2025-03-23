const fs = require('fs');
const path = require('path');

// Hàm đệ quy để tạo cấu trúc sidebar
function generateSidebar(dir, basePath = 'sop') {
    let sidebar = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Nếu là thư mục, tạo một mục sidebar với text, prefix, link và children
            const text = file.charAt(0).toUpperCase() + file.slice(1); // Viết hoa chữ cái đầu
            const prefix = path.join(basePath, file).replace(/\\/g, '/'); // Thay \ thành / cho đồng nhất
            const children = generateSidebar(fullPath, prefix);

            sidebar.push({
                text: text,
                prefix: `/${prefix}/`,
                link: `/${prefix}/`,
                children: children
            });
        } else if (file.endsWith('.md')) {
            // Nếu là file Markdown, thêm đường dẫn tương đối vào children
            const relativePath = path.join(basePath, file).replace(/\\/g, '/');
            sidebar.push(`/${relativePath}`);
        }
    });

    return sidebar;
}

// Tạo sidebar từ thư mục 'sop'
const sidebar = generateSidebar(path.join(__dirname, '../sop'));

// Ghi nội dung vào file sidebar.js
const sidebarJsContent = `module.exports = ${JSON.stringify(sidebar, null, 4)};\n`;
fs.writeFileSync(path.join(__dirname, 'sidebar.js'), sidebarJsContent);

console.log('Sidebar generated successfully!');