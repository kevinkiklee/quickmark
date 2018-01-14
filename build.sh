#!/bin/bash
echo "=== Quickmark Building ==="

rm quickmark.zip
rm -rf ./build
mkdir build

cp -a ./src/icons ./build
cp ./src/background.js ./build
cp ./src/content.js ./build
cp ./src/manifest.json ./build

cd build
zip -r ./quickmark.zip ./*
cd ..
mv build/quickmark.zip ./

echo "=== Built!!! ==="
