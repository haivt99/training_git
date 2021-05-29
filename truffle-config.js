# Lần đầu sử dụng
git init
git status
git add .
git commit -m "Up date a new file"
git remote add origin https://github.com/haivt99/training_git
git push -u origin master

# Clone code về, sửa rồi push lên
git clone https://github.com/haivt99/training_git
git checkout -b nameBranch
git add nameFile
git commit -m "Modify a file"
git push --set-upstream origin nameBranch

# Lấy thay đổi từ trên server
git pull origin master


