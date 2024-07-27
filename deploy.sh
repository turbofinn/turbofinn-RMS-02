#!/bin/bash

rm -rf build/ && \
# nvm use 18 && \
yarn build && cd build && \
aws --profile default s3 sync  . s3://turbofinn-rms 
# Invalidate Cache
# aws --profile turbofinn cloudfront create-invalidation --distribution-id EJMY7PS0I1EGG --paths "/*"
echo " ------------------------------------------------------"
echo "|                                                      |"
echo "|                     Done                             |"