#!/bin/bash
echo "=== Quickmark Building ==="

rm quickmark.zip
rm -rf ./build
mkdir build

cp -a ./icons ./build
cp background.js ./build
cp content.js ./build
cp manifest.json ./build

cd build
zip -r ./quickmark.zip ./*
cd ..
mv build/quickmark.zip ./
rm -rf ./build

echo "=== Built!!! ==="
