# Lần đầu sử dụng
git init
git status
git add .
git commit -m "Up date a new file"
git remote add origin https://github.com/haivt99/training_git
git push -u origin master

# Clone code về, edit rồi push lên
git init
git clone https://github.com/haivt99/training_git
cd training_git
(edit file)
git add nameFile
git commit -m "Modify a file"
git checkout -b nameBranch
git push --set-upstream origin nameBranch

# Lấy thay đổi từ trên server
git pull origin master


