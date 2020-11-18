set -e
cd dist
git init .
git add .
git commit -am 'deploy'
git remote add origin https://github.com/halobear/css.git
git push origin gh-pages -f