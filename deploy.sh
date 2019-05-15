#/bin/bash
ng build
#upload files
aws s3 cp ./dist s3://cloud.flashlights.com --recursive --acl public-read