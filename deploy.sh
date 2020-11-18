set -e
cd html
git init .
echo "theme: jekyll-theme-cayman" > _config.yml
git add .
git commit -am 'deploy'
git remote add origin https://github.com/halobear/css.git
git push origin master:gh-pages -f
rm -fr .git
cd -