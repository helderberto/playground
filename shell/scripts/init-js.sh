project_directory=$1

echo "Initializing JS project in the $pwd/$project_directory"

path_project=$pwd/$project_directory

mkdir $project_directory
cd $project_directory

echo "Initialize GIT and NPM"
git init
npm init -y
mkdir src
echo "console.log('Hello World');" > src/index.js
echo "Done!"
