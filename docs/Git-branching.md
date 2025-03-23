## Git Branching cho Công Ty Dược Phẩm

### Câu hỏi:

Dựa vào bài viết https://medium.com/@sreekanth.thummala/choosing-the-right-git-branching-strategy-a-comparative-analysis-f5e635443423

Hãy áp dụng chiến lược git-flow, git branching vào hệ thống quản lý phiên bản SOP ("SOP" stands for Standard Operating Procedure - Tiếng Việt gọi là "Qui Trình Thao Tác Chuẩn") của một công ty dược phẩm. Lấy ví dụ: SOP cho cân nguyên liệu, SOP vận hành máy dập viên, SOP vận hành máy Ép vỉ. gồm có các nhánh (branch):
1. make-sop(Tạo SOP)
2. validate (thẩm định SOP)
3. Issue (ký và banh hành SOP)
4. Revalidate (tái thẩm định SOP)
Nhân sự liên quan: nhân viên vận hành, người thẩm định, người ký ban hành, người thẩm định lại.

### Grok 3 (Deepsearch)


---
## Git Branching cho Công Ty Dược Phẩm

Git branching là một tính năng mạnh mẽ của Git cho phép bạn tạo ra các nhánh (branch) riêng biệt để phát triển các tính năng mới, kiểm thử, chuẩn bị phát hành, hoặc sửa lỗi mà không ảnh hưởng đến nhánh chính (main branch). Dưới đây là hướng dẫn cơ bản về các loại nhánh và cách đặt tên:

### Các loại nhánh cơ bản:
- **develop**: Dùng để phát triển các tính năng mới.
- **test**: Dùng để kiểm thử các tính năng.
- **release**: Dùng để chuẩn bị phát hành.
- **hotfix**: Dùng để sửa lỗi gấp.

### Cách đặt tên:
- **Commit**: Sử dụng tên mô tả rõ ràng, đúng chuẩn.
- **Branch**: Tuân theo tiêu chuẩn đặt tên để đảm bảo dễ theo dõi và phối hợp.

### Phân Quyền Cho Mỗi Bộ Phận:
- **Nhà Máy**: Quản lý nhánh develop và các nhánh con như Cân-SOP, Trộn-SOP, Dập Viên-SOP, Bao Film-SOP, Lau Viên-SOP, Ép Vỉ-SOP.
- **QA-SOP**: Quản lý nhánh test để kiểm thử và đảm bảo chất lượng.
- **QC-SOP**: Quản lý nhánh release để chuẩn bị phát hành và quản lý phiên bản.
- **Kho Thành Phẩm-SOP** và **Kho Nguyên Liệu-SOP**: Quản lý nhánh hotfix để sửa lỗi khẩn cấp.

Sử dụng các lệnh sau để tạo nhánh:

```bash
git branch develop
git branch test
git branch release
git branch hotfix
```

- Cấu trúc thư mục

```mermaid
flowchart TD
    A[Master SOP] -->|Khởi tạo nhánh develop| B(Nhà Máy)
    A -->|Khởi tạo nhánh test| C(QA-SOP)
    A -->|Khởi tạo nhánh release| D(QC-SOP)
    A -->|Khởi tạo nhánh hotfix| E(Kho Thành Phẩm-SOP)
    A -->|Khởi tạo nhánh hotfix| F(Kho Nguyên Liệu-SOP)
    B -->|nhánh sản xuất|G(Cân-SOP)
    B -->|nhánh sản xuất|H(Trộn-SOP)
    B -->|nhánh sản xuất|I(Dập Viên-SOP)
    B -->|nhánh sản xuất|J(Dập Viên-SOP)
    B -->|nhánh sản xuất|K(Bao Film-SOP)
    B -->|nhánh sản xuất|L(Lau Viên-SOP)
    B -->|nhánh sản xuất|M(Lau Viên-SOP)
    B -->|nhánh sản xuất|N(Ép Vỉ-SOP)
```

## Creating Production Sub-branch in Develop

From the develop branch, create a sub-branch named production to hold deployment-ready features.

### Commands

```bash
git checkout develop
git checkout -b production
```

### Branch Structure Diagram

```mermaid
flowchart TD
    D[Develop]
    P[Production]
    D -->|tạo nhánh con Production| P
```

- Workflow

```mermaid

---
title: Git Flow cho Quản lý SOP
---

gitGraph
   commit id: "1" tag: "Initial commit on main"
   branch create-sop
   checkout create-sop
   commit id: "2" tag: "Initial commit on create-sop"
   branch validate/sop1
   checkout validate/sop1
   commit id: "3" tag: "Create SOP (make-sop)"
   commit id: "4" tag: "Refine SOP (make-sop)"
   checkout create-sop
   merge validate/sop1 tag: "Validate SOP"
   checkout main
   merge create-sop tag: "Issue SOPs"
   branch validate/sop1-v2
   checkout validate/sop1-v2
   commit id: "5" tag: "Start revalidation (revalidate)"
   commit id: "6" tag: "Update SOP (revalidate)"
   checkout create-sop
   merge validate/sop1-v2 tag: "re-validate SOP"
   checkout main
   merge create-sop tag: "Re-issue SOPs"

```

