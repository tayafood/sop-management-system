# Hướng dẫn sử dụng Git trong VSCode cho người dùng mới

## 1. Mở VSCode và cài đặt Git
- Cài đặt Git từ [git-scm.com](https://git-scm.com/) nếu chưa có.
- Mở VSCode, đảm bảo rằng Git đã được cài đặt và VSCode phát hiện Git tự động.

## 2. Sử dụng Source Control trong VSCode
- Nhấp vào biểu tượng Source Control (biểu tượng dấu nhánh) trên thanh bên trái hoặc dùng phím tắt Ctrl+Shift+G.
- VSCode sẽ hiển thị các thay đổi của bạn, cho phép thêm, commit và theo dõi file.

## 3. Clone một kho lưu trữ Git
1. Mở Command Palette bằng cách nhấn Ctrl+Shift+P.
2. Gõ "Git: Clone" và nhập URL của kho lưu trữ.
3. Chọn thư mục để lưu kho và mở nó trong VSCode.

## 4. Thực hiện Commit và Push
- Sau khi chỉnh sửa file, bạn sẽ thấy các thay đổi trong mục Source Control.
- Nhấp vào dấu "+" trên các file để thêm vào staging.
- Nhập thông điệp commit vào ô nhập thông điệp.
- Nhấn dấu tích (commit) để lưu lại commit.
- Để đẩy lên remote repository, mở Terminal trong VSCode (Ctrl+`) và nhập lệnh:
    ```sh
    git push
    ```

## 5. Các thao tác hữu ích khác
- **Pull changes:** Nhấn vào biểu tượng tải xuống ở góc dưới bên trái hoặc dùng lệnh git pull từ Terminal.
- **Tạo mới branch:** Mở Terminal và nhập:
    ```sh
    git checkout -b ten-branch
    ```
- **Merge branch:** Từ Terminal:
    ```sh
    git merge ten-branch
    ```

VSCode tích hợp Git giúp quản lý phiên bản và theo dõi thay đổi dễ dàng, phù hợp cho người dùng mới bắt đầu với Git.


---

# Hướng dẫn cách sử dụng Git để tạo file Markdown và commit lên GitHub

## Bước 1: Cài đặt Git
1. Tải và cài đặt Git từ [git-scm.com](https://git-scm.com/).
2. Kiểm tra cài đặt bằng lệnh:
    ```sh
    git --version
    ```

## Bước 2: Cấu hình Git
1. Cấu hình tên người dùng và email:
    ```sh
    git config --global user.name "Tên của bạn"
    git config --global user.email "email@example.com"
    ```

## Bước 3: Khởi tạo kho lưu trữ Git
1. Tạo một thư mục mới và chuyển vào thư mục đó:
    ```sh
    mkdir my-repo
    cd my-repo
    ```
2. Khởi tạo kho lưu trữ Git:
    ```sh
    git init
    ```

## Bước 4: Tạo file Markdown
1. Tạo file Markdown mới:
    ```sh
    touch README.md
    ```
2. Mở file và thêm nội dung:
    ```markdown
    # Đây là file README
    ```

## Bước 5: Commit thay đổi
1. Thêm file vào vùng chuẩn bị:
    ```sh
    git add README.md
    ```
2. Tạo commit với thông điệp:
    ```sh
    git commit -m "Thêm file README.md"
    ```

## Bước 6: Đẩy lên GitHub
1. Tạo kho lưu trữ mới trên GitHub.
2. Thêm remote repository:
    ```sh
    git remote add origin https://github.com/username/my-repo.git
    ```
3. Đẩy thay đổi lên GitHub:
    ```sh
    git push -u origin master
    ```

## Kết luận
Bạn đã hoàn thành các bước cơ bản để tạo file Markdown và commit lên GitHub. Hãy tiếp tục khám phá các lệnh Git khác để quản lý dự án của bạn hiệu quả hơn.