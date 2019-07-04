prompt_confirm() {
  while true; do
    read -r -p "${1:-Continue?} (y/n): " REPLY
    case $REPLY in
      [yY]) echo ; return 0 ;;
      [nN]) echo ; return 1 ;;
      *) printf " \033[31m %s \n\033[0m" "invalid input"
    esac
  done
}

pwdDir=$PWD
libraryDir=$pwdDir/serious-game-library
frontendDir=$pwdDir/serious-game-frontend
backendDir=$pwdDir/serious-game-backend


echo "################################################# "
echo "-----------------------"
echo "1. Root Directory"
echo "-----------------------"
echo "This script must be called from the projects root directory (the parent folder of all projects)."
echo ""
echo "root: " $pwdDir
echo ""
prompt_confirm "Is the projects root directory correct?" || exit 0


echo "-----------------------"
echo "2. Modules"
echo "-----------------------"
echo "Module folders must be named:"
echo ""
echo "root:                      " $pwdDir
echo "serious-game-library:      " $libraryDir
echo "serious-game-frontend:     " $frontendDir
echo "serious-game-backend:      " $backendDir
echo " "
prompt_confirm "Are the paths correct?" || exit 0

echo "-----------------------"
echo "3. Cleanup"
echo "-----------------------"

echo "Cleaning up serious-game-frontend..."
rm -rf $frontendDir/src/lib


echo "Cleaning up serious-game-backend..."
rm -rf $backendDir/src/lib

echo "-----------------------"
echo "4. Initializing Directory Structure"
echo "-----------------------"

echo "-----------------------"
echo "4. Linkage"
echo "-----------------------"


echo "Linking serious-game-frontend..."
ln -sf "$libraryDir/src" "$frontendDir/src/lib"


echo "Linking serious-game-backend..."
ln -sf "$libraryDir/src" "$backendDir/src/lib"



echo "If any errors occured, check the paths again."
echo "Done."








